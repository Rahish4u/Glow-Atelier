import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Navbar from "./Components/Home/Navbar";
import Services from "./Components/Pages/Services";
import BookingForm from "./Components/Pages/BookingForm";
import Footer from "./Components/Home/Footer";
import About from "./Components/Pages/About";


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
          <Route
            path="/appointment"
            element={
              <>
                <BookingForm /> {/* Booking Form Component */}
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
