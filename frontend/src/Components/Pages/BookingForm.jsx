import React, { useState, useEffect } from "react";

const BookingForm = () => {
  const [services, setServices] = useState([]); // List of services
  const [formData, setFormData] = useState({
    serviceId: "",
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [message, setMessage] = useState("");

  // Fetch services from the backend
  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Booking successful!");
        setFormData({ serviceId: "", name: "", email: "", date: "", time: "" }); // Reset form
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Book a Service</h2>

      {message && (
        <div
          className={`p-3 mb-4 text-center rounded ${
            message.includes("successful") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Select Service */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Select Service</label>
          <select
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((service) => (
              <option key={service._id} value={service._id}>
                {service.name} - ₹{service.price}
              </option>
            ))}
          </select>
        </div>

        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

