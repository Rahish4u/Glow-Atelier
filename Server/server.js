const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const serviceRoutes = require("./Routes/serviceRoute");
const bookingRoutes = require("./Routes/bookingRoute");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Import Routes
app.use("/api/services", serviceRoutes);
app.use("/api/bookings", bookingRoutes);

// Connect  to MongoDB and start the server
mongoose.connect(process.env.MONGO_URL, {
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
