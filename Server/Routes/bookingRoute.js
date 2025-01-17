const express = require("express");
const booking = require("../Models/booking");
const router = express.Router();

// Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await booking.find().populate("serviceId");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new booking
router.post("/", async (req, res) => {
  const { serviceId, name, email, date, time } = req.body;
  try {
    const booking = new Booking({
      serviceId,
      name,
      email,
      date,
      time,
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
