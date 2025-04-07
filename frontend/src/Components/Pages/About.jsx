import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-900 text-white py-16 px-6 pt-24">
      {/* About Us Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white">About Us</h2>
        <p className="mt-6 text-gray-300 text-lg">
          Welcome to{" "}
          <span className="font-semibold text-pink-400">Glow Atelier</span>, a
          serene women-only salon located in the heart of
          <span className="font-semibold text-pink-400"> Varanasi</span>. We
          believe every woman deserves to feel beautiful and confident. Our
          luxurious beauty services are designed to enhance your natural glow,
          whether it's for a special occasion or a self-care day.
        </p>
        <p className="mt-4 text-gray-300 text-lg">
          From expert haircuts and vibrant color treatments to rejuvenating
          facials and pampering nail care, our skilled professionals use
          premium-quality products to ensure you leave feeling refreshed,
          empowered, and radiant.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-3xl font-bold text-white">Why Choose Us?</h3>
        <ul className="mt-8 space-y-6 text-gray-300 text-lg flex flex-col items-center">
          {[
            "Skilled professionals dedicated to your satisfaction.",
            "Use of premium-quality, eco-friendly products.",
            "A serene, women-only space for relaxation.",
            "Modern techniques and the latest beauty trends.",
            "Personalized services tailored to your unique needs.",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 transition-transform duration-300 hover:scale-105 hover:text-pink-400"
            >
              <svg
                className="w-6 h-6 text-pink-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/appointment")}
            className="bg-pink-600 hover:bg-pink-700 transition text-white py-2 px-6 rounded-lg shadow-md"
          >
            Book Your Appointment Today!
          </button>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-3xl font-bold text-center text-white">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            {
              name: "Priya Sharma",
              role: "Hair Stylist",
              description:
                "Specializes in stylish cuts, coloring, and keratin treatments.",
              image:
                "https://media.istockphoto.com/id/1206174016/photo/smile-of-the-professional.jpg?s=612x612&w=0&k=20&c=SSrrFne1Fw_PSh3nj9P4gRx0gxfjP9mKYx-KQ2Cxu-I=",
            },
            {
              name: "Meera Singh",
              role: "Makeup Artist",
              description:
                "Expert in bridal makeup and event-ready transformations.",
              image:
                "https://media.istockphoto.com/id/1806127775/photo/portrait-of-female-hairdresser-at-the-salon-holding-hairdressing-scissor.jpg?s=612x612&w=0&k=20&c=Ydy4HkIu1Nfo56RCXjCavBrwkQ0GKAdQxzyWkudraGc=",
            },
            {
              name: "Anjali Verma",
              role: "Spa Therapist",
              description:
                "Skilled in relaxation massages, facials, and aromatherapy.",
              image:
                "https://media.istockphoto.com/id/1305586787/photo/portrait-of-asian-women-hair-stylish-business-owner-standing-and-smile-inside-of-hair-salon.jpg?s=612x612&w=0&k=20&c=xPRAbuaEC8GX8dl1YaxIx9AERDSHY75uWjJI8VsEl_0=",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-zinc-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="text-lg font-semibold text-white">
                  {member.name}
                </h4>
                <p className="text-sm text-pink-400">{member.role}</p>
                <p className="mt-4 text-gray-300">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
