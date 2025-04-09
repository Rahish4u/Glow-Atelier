const express = require("express");
const connectDB = require("./db.config");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./Routes/authRoute"); 
const serviceRoutes = require("./Routes/serviceRoute");
const bookingRoutes = require("./Routes/bookingRoute");

dotenv.config();

// Connect to MongoDB
connectDB();


// Middlewares
const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: 'https://glow-atelier-frontend.onrender.com', //  frontend's URL (React app)
  credentials: true, // Important for cookies
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/services", serviceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {  
  console.log(`Server running on port ${PORT}`);
});


















// Connect to MongoDB and start the server
// mongoose
//   .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(process.env.PORT, () => {
//       console.log(`Server running on port ${process.env.PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });
