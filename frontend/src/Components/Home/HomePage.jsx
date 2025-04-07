import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/appointment");
  };
  return (
    <>
      <div className="w-full min-h-screen bg-neutral-900 text-white overflow-x-hidden">
        <header className="relative min-h-screen md:h-[auto]">
          <img
            src="https://images.unsplash.com/photo-1613754773306-532ec48b0de5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Barbershop Hero"
            className=" absolute w-full h-full object-cover brightness-50 top-0 left-0"
           
          />

          {/* Responsive Flex Container */}
          <div className="relative inset-0 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-8 space-y-8 md:space-y-0 md:space-x-8 ">
            {/* Form Section */}
            <div className="w-full md:w-1/2 max-w-md px-4 md:px-6 md:mt-20 sm:mt-0">
              <div className="py-8 px-6 rounded-xl backdrop-blur-md shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white">
                <h2 className="text-white text-3xl mb-6 font-bold tracking-tight">
                  Make an appointment
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-2 rounded-lg bg-white/5 text-white placeholder-white/40 outline-none border border-white hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full p-2 rounded-lg bg-white/5 text-white placeholder-white/40 outline-none border border-white hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md"
                  />
                  <input
                    type="string"
                    placeholder="Phone"
                    className="w-full p-2 rounded-lg bg-white/5 text-white placeholder-white/40 outline-none border border-white hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md"
                  />
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <input
                      type="datetime-local"
                      className="w-full md:w-1/2 p-2 rounded-lg bg-white/5 text-white placeholder-white/40 outline-none border border-white hover:border-white/30 focus:border-pink-500/50 transition-all duration-300 backdrop-blur-md"
                    />
                    <button
                      onClick={handleBookingClick}
                     className="w-full md:w-auto bg-gradient-to-r from-gray-400 to-pink-600 text-white py-2 px-6 rounded-lg font-semibold shadow-lg hover:from-pink-600 hover:to-white transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-xl">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-white/70 italic text-sm mt-6">
                <p>
                  Experience the perfect blend of classic heritage and
                  contemporary fashion with our unique collection. Elevate your
                  style effortlessly.
                </p>
              </div>
            </div>

            {/* Heading Section */}
            <div className="w-full md:w-1/2 text-white text-center md:text-left pt-24 md:mt-0 px-4">
              <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-tight hidden md:block">
                Where Tradition Meets <br /> Modern Style
              </h1>
            </div>
          </div>
        </header>

        {/* Services Section */}
        <section id="services" className="py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-white mb-6">
                SERVICE BEYOND EXPECTATION
              </h2>
              <p className="text-neutral-300 mb-8">
                At Glow Atelier, we believe every woman deserves to feel
                beautiful and confident. Located in the heart of Varansi, our
                women-only salon offers a serene space for luxurious beauty
                services, including expert haircuts, vibrant color treatments,
                rejuvenating facials, and pampering nail care. Our skilled
                professionals use high-quality products to ensure you leave
                feeling refreshed and empowered. Whether for a special occasion
                or a self-care day, Glow Atelier is your ultimate beauty
                destination. Experience your best self!
              </p>
            </div>
            <div className="w-full md:w-96 h-96">
              <img
                src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Location Map"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="py-16 px-6 md:px-16 bg-neutral-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12">
              DISCOVER OUR WORKS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "https://images.unsplash.com/photo-1643252824236-99080a322120?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1654760748724-a0afda4c8211?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ].map((src, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <img
                    src={src}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-lg font-medium">
                      {
                        ["Classic Cut", "Modern Style", "Cool Environment"][
                          index
                        ]
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default HomePage;
