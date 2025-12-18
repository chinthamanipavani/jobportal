
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register
// const register = async (req, res) => {
//   try {
//     console.log("Incoming data:", req.body);
//     const { name, email, password, role } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).send("All fields are required");
//     }
//     if (!role || !["jobseeker", "recruiter"].includes(role)) {
//       return res.status(400).send("Role must be either 'jobseeker' or 'recruiter'");
//     }

//     const isExist = await User.findOne({ email });
//     if (isExist) {
//       return res.status(400).send("User already exists");
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//     });

//     await newUser.save();
//     console.log("User saved successfully");
//     res.status(201).send("User created");
//   } catch (err) {
//     console.error("Registration Error:", err.message);
//     res.status(500).send("Server error: " + err.message);
//   }
// };
const register = async (req, res) => {
  try {
    const { name, email, password, role, phone } = req.body;

    // Required fields
    if (!name || !email || !password || !phone) {
      return res.status(400).send("All fields are required");
    }

    // Name validation
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return res.status(400).send("Name must contain only letters");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send("Invalid email format");
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).send("Phone number must be 10 digits");
    }

    // Password validation
    if (password.length < 6) {
      return res
        .status(400)
        .send("Password must be at least 6 characters");
    }

    // Role validation
    if (!["jobseeker", "recruiter"].includes(role)) {
      return res.status(400).send("Invalid role");
    }

    // Check existing user
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(400).send("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      phone,
    });

    await newUser.save();
    res.status(201).send("User created successfully");

  } catch (err) {
    res.status(500).send("Server error");
  }
};


// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const matchedObj = await User.findOne({ email });
    if (!matchedObj) {
      return res.status(401).send("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, matchedObj.password);
    if (!isMatch) {
      return res.status(401).send("Invalid credentials");
    }

    const token = jwt.sign(
      { id: matchedObj._id, role: matchedObj.role, email: matchedObj.email },
      "pavani123", 
      { expiresIn: "1d" }
    );

    res.json({
      matchedObj: {
        name: matchedObj.name,
        email: matchedObj.email,
        role: matchedObj.role,
      },
      token,
    });
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).send("Server error: " + err.message);
  }
};

// Logout + Delete User
const logoutAndDelete = async (req, res) => {
  try {
    const { email } = req.body;

    const deletedUser = await User.findOneAndDelete({ email });
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ✅ Export everything in one go
module.exports = { register, login, logoutAndDelete };
