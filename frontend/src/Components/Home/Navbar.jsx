import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShow = () => setShow(!show);

  const handleClickOutside = (event) => {
    if (event.target.closest("header") === null) {
      setShow(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleAppointmentClick = () => {
    if (!isLoggedIn) {
      localStorage.setItem("redirectAfterLogin", "/appointment");
      navigate("/login");
    } else {
      navigate("/appointment");
    }
    setShow(false); // Close mobile menu
  };

  return (
    <>
      <header className="h-20 flex justify-center items-center fixed w-full left-1/2 -translate-x-1/2 mt-2 z-[1000] pointer-events-none">
        <div
          className="flex items-center justify-evenly relative w-[96%] md:w-[90%] lg:w-[1000px] xl:w-[1200px] h-[3.85rem] rounded-xl backdrop-blur-md border border-opacity-50 z-[100] pointer-events-auto"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)", // ultra transparent
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 className="text-xl font-bold text-white uppercase">
            Glow Atelier
          </h1>

          <nav className="w-7/12">
            <ul className="md:flex hidden items-center justify-evenly font-semibold text-sm w-full text-pink-500 uppercase">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <button onClick={handleAppointmentClick} className="uppercase">
                  Appointment
                </button>
              </li>
            </ul>
          </nav>

          {/* Login / Logout */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-pink-600 hover:shadow-pink-400 hover:shadow-lg transition-all duration-300 hidden md:flex rounded-lg py-2 px-4 text-gray-50 text-base"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-pink-600 hidden md:flex rounded-lg py-2 px-4 text-gray-50 text-base"
            >
              Login
            </Link>
          )}

          {/* Hamburger for mobile */}
          <label className="flex flex-col gap-2 w-8 md:hidden">
            <input
              className="peer hidden"
              type="checkbox"
              checked={show}
              onChange={handleShow}
            />
            <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]" />
            <div className="rounded-2xl h-[3px] w-full bg-white duration-500 peer-checked:-rotate-45" />
            <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]" />
          </label>
        </div>

        {/* Mobile Nav */}
        <div
          className={`absolute md:hidden h-auto w-[96%] mt-[27rem] rounded-xl backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px] py-4 transition-all duration-500 ${
            show
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)", // ultra transparent
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <nav className="md:hidden flex items-center justify-evenly h-full text-white font-semibold text-sm">
            <ul className="flex flex-col items-center gap-12 h-full font-semibold text-sm w-full text-white uppercase">
              <li>
                <Link to="/" onClick={handleShow}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleShow}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleShow}>
                  Services
                </Link>
              </li>
              <li>
                <button onClick={handleAppointmentClick} className="uppercase">
                  Appointment
                </button>
              </li>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    handleShow();
                  }}
                  className="bg-pink-600 rounded-lg py-2 px-4 text-gray-50 text-base hover:shadow-[0_0_10px_#e91e63] transition-all duration-300"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={handleShow}
                  className="bg-pink-600 rounded-lg py-2 px-4 text-gray-50 text-base hover:shadow-[0_0_10px_#e91e63] transition-all duration-300"
                >
                  Login
                </Link>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
