import React from "react";
import { useNavigate } from "react-router-dom";
import Corousal from "../Home/Corousal";


const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      _id: 1,
      name: "Expert Haircuts",
      description:
        "Skilled stylists provide customized haircuts to suit individual needs and preferences.",
      price: 1500,
      duration: "60 mins",
      image:
        "https://thumbs.dreamstime.com/b/beautiful-woman-hair-salon-going-big-curls-mirror-reflection-young-women-discussing-hairstyling-her-hairdresser-50870416.jpg",
    },
    {
      _id: 2,
      name: "Hair Color",
      description:
        "Offers a range of hair color services, including highlights, balayage, and permanent color, to enhance and transform hair.",
      price: 2500,
      duration: "120 mins",
      image:
        "https://t4.ftcdn.net/jpg/06/60/40/07/360_F_660400768_O9xGXWDj1wfysC6EiYRR0t4565EauB9Z.jpg",
    },
    {
      _id: 3,
      name: "Rejuvenating Facials",
      description:
        "Provides a variety of facial treatments to improve skin health, reduce signs of aging, and promote a youthful glow.",
      price: 1800,
      duration: "45 mins",
      image:
        "https://media.istockphoto.com/id/921797424/photo/woman-in-mask-on-face-in-spa-beauty-salon.jpg?s=612x612&w=0&k=20&c=gGSPZOjIS2wcwQyOcjANOKpRVU0KR_iEDbRACnAoIXA=",
    },
    {
      _id: 4,
      name: "Pampering Nail Care",
      description:
        "Includes manicures and pedicures, offering a relaxing and luxurious hand and foot care experience.",
      price: 800,
      duration: "30 mins",
      image:
        "https://thumbs.dreamstime.com/b/beautiful-girl-bright-evening-make-up-pink-manicure-rhinestones-nail-design-beauty-face-picture-taken-52692758.jpg",
    },
    {
      _id: 5,
      name: "Women-Only Salon",
      description:
        "Provides a dedicated and exclusive space for women to relax and enjoy beauty services in a comfortable and private environment.",
      price: 800,
      duration: "30 mins",
      image:
        "https://img.freepik.com/free-photo/team-bride-celebrating-before-wedding_23-2149329142.jpg",
    },
    {
      _id: 6,
      name: "High-Quality Products",
      description:
        "Utilizes premium beauty products from reputable brands to ensure the best possible results for clients.",
      price: 800,
      duration: "30 mins",
      image:
        "https://img.freepik.com/free-photo/close-up-hairdresser-shop-instruments_23-2149319780.jpg?semt=ais_incoming",
    },
  ];
  

  return (
    <div className="bg-zinc-900 text-white min-h-screen py-6 px-6 ">
      {/* Keep Corousal on Top in Service page */}
       <Corousal/>
      <h1 className="text-4xl font-extrabold text-white text-center mb-8 mt-8">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105"
          >
            <img
              src={service.image}
              alt={`${service.name}`}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{service.name}</h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-pink-400 font-bold">
                  ₹{service.price} / {service.duration}
                </p>
                <button
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition"
                  onClick={() => navigate("/appointment")}
                >
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
