import React from 'react';

const About = () => {
  return (
    <div className="bg-yellow-100 py-12 px-6">
      
      {/* About Us Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        <p className="mt-4 text-gray-600">
          Welcome to <span className="font-semibold">Radiance Room</span>, where beauty meets relaxation. Located in the heart of 
          <span className="font-semibold">Indore</span>, we specialize in premium hair, skin, and spa services tailored to enhance your natural glow.
        </p>
        <p className="mt-4 text-gray-600">
          Our team of skilled professionals is passionate about delivering personalized experiences to ensure you look and feel your best. Step into our serene space, unwind, and let us take care of the rest.
        </p>
      </div>

      
      {/* Why Choose Us Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="text-2xl font-bold text-center text-gray-800">Why Choose Us?</h3>
        <ul className="mt-6 space-y-4 text-gray-600 text-center">
          {[
            "Experienced and friendly professionals.",
            "Use of high-quality, eco-friendly products.",
            "Modern techniques and the latest trends.",
            "A clean, comfortable, and relaxing atmosphere.",
            "Let us bring out the best version of you."
          ].map((item, index) => (
            <li key={index} className="flex items-center justify-center gap-2">
              <svg
                className="w-6 h-6 text-green-500"
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
          <li className="flex items-center justify-center gap-2">
            <button className="text-blue-500 hover:underline font-medium">
              Book your appointment today!
            </button>
          </li>
        </ul>
      </div>

      
      {/* Meet Our Team Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-2xl font-bold text-center text-gray-800">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            {
              name: "Shahid Kapoor",
              role: "Hair Stylist",
              description: "Specializes in trendy cuts, hair coloring, and keratin treatments.",
              image: "path/to/hair-stylist-image.jpg" // Replace with actual image path
            },
            {
              name: "Anuska Sen",
              role: "Makeup Artist",
              description: "Expert in bridal and event makeup, creating flawless, camera-ready looks.",
              image: "path/to/makeup-artist-image.jpg" // Replace with actual image path
            },
            {
              name: "Ranveer Singh",
              role: "Spa Therapist",
              description: "Specializes in relaxation massages, aromatherapy, and facials.",
              image: "path/to/spa-therapist-image.jpg" // Replace with actual image path
            }
          ].map((member, index) => (
            <div key={index} className="bg-yellow-200 shadow-md rounded-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-72 object-cover" />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="mt-2 text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;