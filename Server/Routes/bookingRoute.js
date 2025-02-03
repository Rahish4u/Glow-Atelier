const express = require("express");
const Booking = require("../Models/booking");
const Service = require("../Models/service");
const router = express.Router();

// Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("serviceId");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error: error.message });
  }
});

// Add a new booking
router.post("/", async (req, res) => {
  const { serviceId, name, email, date, time } = req.body;

  // Validate the request body
  if (!serviceId || !name || !email || !date || !time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    const booking = new Booking({
      serviceId,
      name,
      email,
      date,
      time,
    });

    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
