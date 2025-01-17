import React from "react";
import { useNavigate } from "react-router-dom";



const Services = () => {
  const navigate = useNavigate()
  const services = [
    {
      _id: 1,
      name: "Expert Haircuts",
      description: "Skilled stylists provide customized haircuts to suit individual needs and preferences.",
      price: 1500,
      duration: "60 mins",
      image: "https://picsum.photos/id/237/200/300", // Replace with your image URL
    },
    {
      _id: 2,
      name: "Hair Color",
      description: "Offers a range of hair color services, including highlights, balayage, and permanent color, to enhance and transform hair..",
      price: 2500,
      duration: "120 mins",
      image: "https://picsum.photos/id/238/200/300", // Replace with your image URL
    },
    {
      _id: 3,
      name: "Rejuvenating Facials",
      description: "Provides a variety of facial treatments to improve skin health, reduce signs of aging, and promote a youthful glow.",
      price: 1800,
      duration: "45 mins",
      image: "https://picsum.photos/id/239/200/300", // Replace with your image URL
    },
    {
      _id: 4,
      name: "Pampering Nail Care",
      description: "Includes manicures and pedicures, offering a relaxing and luxurious hand and foot care experience.",
      price: 800,
      duration: "30 mins",
      image: "https://picsum.photos/id/240/200/300", // Replace with your image URL
    },

    {
      _id: 5,
      name: "Women-Only Salon",
      description: "Provides a dedicated and exclusive space for women to relax and enjoy beauty services in a comfortable and private environment.",
      price: 800,
      duration: "30 mins",
      image: "https://picsum.photos/id/240/200/300", // Replace with your image URL
    },

    {
      _id: 6,
      name: "High-Quality Products",
      description: "Utilizes premium beauty products from reputable brands to ensure the best possible results for clients.",
      price: 800,
      duration: "30 mins",
      image: "https://picsum.photos/id/240/200/300", // Replace with your image URL
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Our Services
      </h1>
      <p className="text-gray-600 m-4 text-md text-center item-center">
            At Glow Atelier, we believe every woman deserves to feel beautiful
            and confident. Located in the heart of [Your Location], our
            women-only salon offers a serene space for luxurious beauty
            services, including expert haircuts, vibrant color treatments,
            rejuvenating facials, and pampering nail care. Our skilled
            professionals use high-quality products to ensure you leave feeling
            refreshed and empowered. Whether for a special occasion or a
            self-care day, Glow Atelier is your ultimate beauty destination.
            Experience your best self!{" "}
          </p>{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="flex flex-col rounded-lg shadow-md hover:shadow-lg transition bg-white p-4"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="flex flex-col justify-between p-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {service.name}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-blue-600 font-bold">
                  ₹{service.price} / {service.duration}
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                onClick={navigate("/appointment")}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;