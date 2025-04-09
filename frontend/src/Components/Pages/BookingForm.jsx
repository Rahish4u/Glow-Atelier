import React, { useState, useEffect } from "react";
import Select from "react-select";

const BookingForm = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    serviceId: "",
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/services`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { serviceId, name, email, date, time } = formData;
    if (!serviceId || !name || !email || !date || !time) {
      setMessage("All fields are required!");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("Booking successful!");
        setFormData({ serviceId: "", name: "", email: "", date: "", time: "" });
        setTimeout(() => setMessage(""), 5000);
      } else {
        const data = await res.json();
        setMessage(`Error: ${data.message}`);
      }
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  const serviceOptions = services.map((service) => ({
    value: service._id,
    label: `${service.name} - ₹${service.price}`,
  }));

  const reactSelectStyles = {
    control: (base, state) => ({
      ...base,
      background: "linear-gradient(to right, #9ca3af, #ec4899)",
      color: "white",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "0.5rem",
      padding: "2px",
      boxShadow: state.isFocused ? "0 0 0 1px #ec4899" : "",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#1f2937", // Tailwind gray-800
      color: "white",
      borderRadius: "0.5rem",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#ec4899" : "#1f2937",
      color: "white",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "white",
    }),
    placeholder: (base) => ({
      ...base,
      color: "rgba(255,255,255,0.5)",
    }),
  };

  return (
    <div className="min-h-screen relative flex items-start justify-center px-4 pt-40 pb-12">
      <img
        src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Barbershop Background"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
      />

      <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/20 shadow-2xl transform transition-all duration-300">
        <div className="text-center mb-6">
          <i className="fa-solid fa-calendar-check text-4xl text-pink-500"></i>
          <h2 className="text-2xl font-bold mt-4 text-white">Book a Service</h2>
        </div>

        {message && (
          <div
            className={`text-center py-2 px-4 rounded text-sm mb-4 ${
              message.includes("successful")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          {/* Service Dropdown with react-select */}
          <div>
            <label className="block mb-2 text-sm font-medium text-white">Select Service</label>
            <Select
              options={serviceOptions}
              value={serviceOptions.find((opt) => opt.value === formData.serviceId) || null}
              onChange={(selected) =>
                setFormData({ ...formData, serviceId: selected.value })
              }
              styles={reactSelectStyles}
              placeholder="Choose a service"
              isSearchable
            />
          </div>

          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/40 outline-none border border-white hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/40 outline-none border border-white hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block mb-2 text-sm font-medium text-white">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white outline-none border border-white hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block mb-2 text-sm font-medium text-white">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white outline-none border border-white hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-400 to-pink-600 text-white py-2 rounded-lg font-semibold shadow-lg hover:from-pink-600 hover:to-white transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-xl"
          >
            Book Now
          </button>
        </form>

        <footer className="text-center text-xs text-white/60 mt-6 border-t border-white/20 pt-4">
          © {new Date().getFullYear()} - All rights reserved by Glow Atelier
        </footer>
      </div>
    </div>
  );
};

export default BookingForm;
