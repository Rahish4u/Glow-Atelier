const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/userSchema");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user with this email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //  Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" }); // 401 Unauthorized
    }

    //  Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT
    const token = jwt.sign(
      { userId: user._id }, // Payload
      process.env.JWT_SECRET, // Secret key
      { expiresIn: "1h" } // Token expiration time
    );

    res.cookie("jwt", token, {
      httpOnly: true,
    //   secure: process.env.NODE_ENV === "production", // HTTPS only in production!
      sameSite: "strict", // Or 'lax' depending on requirements
      path: "/",
      maxAge: 3600000, // Example: 1 hour
    });

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("jwt"); // Clear the JWT cookie
  res.json({ message: "Logged out successfully" });
});

module.exports = router;
