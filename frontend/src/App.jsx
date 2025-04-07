import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/HomePage";
import Navbar from "./Components/Home/Navbar";
import Services from "./Components/Pages/Services";
import BookingForm from "./Components/Pages/BookingForm";
import Footer from "./Components/Home/Footer";
import About from "./Components/Pages/About";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Signup";
import ProtectBookingRoute from "./Components/Auth/ProtectBookingRoute";


const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar always stays */}
        <Navbar/>

        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Home /> // Home includes Corousal, WelcomePage, and Footer
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About /> {/* About Component */}
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Services /> {/* Services Component */}
              </>
            }
          />
          <Route element={<ProtectBookingRoute />}>
            <Route path="/appointment" element={<BookingForm />} />
          </Route>

          <Route
            path="/login"
            element={
              <>
                <Login /> {/* Login Form Component */}
              </>
            }
          />

          <Route
            path="/register"
            element={
              <>
                <Register /> {/* Register Form Component */}
              </>
            }
          />
        </Routes>

        {/* Footer always stays */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
