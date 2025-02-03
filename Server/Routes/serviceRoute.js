const express = require("express");
const Service = require("../Models/service");
const router = express.Router();

// Get all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services", error: error.message });
  }
});


// Add a new service
router.post("/", async (req, res) => {
  const { name, description, price, duration, image } = req.body;

  // Validate the request body
  if (!name || !description || !price || !duration || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const service = new Service({ name, description, price, duration, image });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: "Error creating service", error: error.message });
  }
});

module.exports = router;
