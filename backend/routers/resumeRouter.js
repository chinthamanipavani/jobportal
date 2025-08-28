const express = require("express");
const Resume = require("../models/Resume");
const router = express.Router();

// POST /submit - create or update resume based on email
router.post("/submit", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Check if a resume with this email already exists
    let resume = await Resume.findOne({ email });

    if (resume) {
      // Update existing resume
      Object.assign(resume, req.body);
      await resume.save();
      res.json({ message: "Resume updated successfully", data: resume });
    } else {
      // Create new resume
      resume = new Resume(req.body);
      await resume.save();
      res.status(201).json({ message: "Resume saved successfully", data: resume });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save resume" });
  }
});

// GET - fetch latest resume
router.get("/", async (req, res) => {
  try {
    const resume = await Resume.findOne().sort({ createdAt: -1 });
    res.json(resume || {});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch resume" });
  }
});

module.exports = router;
