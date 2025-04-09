import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
        localStorage.removeItem("redirectAfterLogin");
        navigate(redirectPath);
        window.location.reload();
      } else {
        const data = await response.json();
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen relative flex items-start justify-center px-4 pt-36 pb-12">
      <img
        src="https://images.unsplash.com/photo-1629397685944-7073f5589754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Barbershop Hero"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
      />
      <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/20 shadow-2xl transform transition-all duration-300">
        <div className="text-center mb-6">
          <i className="fa-solid fa-bag-shopping text-4xl text-pink-500"></i>
          <h2 className="text-2xl font-bold mt-4 text-white">
            Welcome to Glow Atelier
          </h2>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-white"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/40 outline-none border border-white hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md"
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-white"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/40 outline-none border border-white hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-lg"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-400 to-pink-600 text-white py-2 rounded-lg font-semibold shadow-lg hover:from-pink-600 hover:to-white transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-xl"
          >
            Submit
          </button>
          <div className="text-center text-sm mt-4 text-white/80">
            Don't have an account?{" "}
            <Link to="/register" className="text-pink-400 hover:underline">
              Create an account
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

export default Login;
