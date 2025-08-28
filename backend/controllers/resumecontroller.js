// routers/resumeRouter.js
const express = require("express");
const Resume = require("../models/Resume"); // we'll create this model
const router = express.Router();

// POST - save resume
router.post("/", async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json({ message: "Resume saved successfully", data: resume });
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
