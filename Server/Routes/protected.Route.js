const express = require('express');
const router = express.Router();
const authenticateJWT = require('../Middleware/authMiddleware'); 

router.get('/BookingForm', authenticateJWT, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;