import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          navigate("/login");
        } else {
          const data = await response.json();
          setErrors({
            ...errors,
            apiError: data.message || "Registration failed",
          });
        }
      } catch (error) {
        setErrors({ ...errors, apiError: "An error occurred" });
        console.error("Registration error:", error);
      }
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) errors.name = "Name is required";
    if (!data.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.email = "Invalid email format";
    if (!data.password) errors.password = "Password is required";
    else if (data.password.length < 6)
      errors.password = "Minimum 6 characters required";
    if (!data.confirmPassword)
      errors.confirmPassword = "Confirm Password is required";
    else if (data.password !== data.confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    return errors;
  };

  return (
    <div className="min-h-screen relative flex items-start justify-center px-4 pt-40 pb-12">
      <img
        src="https://images.unsplash.com/photo-1629397685944-7073f5589754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Barbershop Background"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
      />
      <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/20 shadow-2xl transform transition-all duration-300">
        <div className="text-center mb-6">
          <i className="fa-solid fa-bag-shopping text-4xl text-pink-500"></i>
          <h2 className="text-2xl font-bold mt-4 text-white">
            Join Glow Atelier
          </h2>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/40 outline-none border ${
                errors.name ? "border-red-500" : "border-white"
              } hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/40 outline-none border ${
                errors.email ? "border-red-500" : "border-white"
              } hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/40 outline-none border ${
                  errors.password ? "border-red-500" : "border-white"
                } hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md`}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-white/80"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/40 outline-none border ${
                  errors.confirmPassword ? "border-red-500" : "border-white"
                } hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md`}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-white/80"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          {errors.apiError && (
            <p className="text-red-500 text-sm text-center">
              {errors.apiError}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-400 to-pink-600 text-white py-2 rounded-lg font-semibold shadow-lg hover:from-pink-600 hover:to-white transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-xl"
          >
            Submit
          </button>

          <div className="text-center text-sm mt-4 text-white/80">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-400 hover:underline">
              Sign In
            </Link>
          </div>
        </form>
        <footer className="text-center text-xs text-white/60 mt-6 border-t border-white/20 pt-4">
          © {new Date().getFullYear()} - All rights reserved by Glow Atelier
        </footer>
      </div>
    </div>
  );
};

export default Register;
