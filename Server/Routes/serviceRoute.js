const express = require("express");
const Service = require("../Models/service");
const router = express.Router();

// Get all services
router.get('/', async (req, res) => {
    try {
      const services = await Service.find();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Add a new service
  router.post('/', async (req, res) => {
    const { name, description, price, duration } = req.body;
    try {
      const service = new Service({ name, description, price, duration });
      await service.save();
      res.status(201).json(service);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  module.exports = router;