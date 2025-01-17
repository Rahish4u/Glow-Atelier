import React from "react";

function WelcomePage() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center mb-40 ">
        <header className="bg-white shadow-md w-full py-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 uppercase font-mono">
            Welcome to Glow Atelier
          </h1>
          {/* <h2 className="text-2xl font-bold text-white bg-pink-700 w-[40%] mx-auto mt-2 p-2 rounded-lg">
         Your Sanctuary for Beauty and Self-Care
        </h2> */}
          <p className="text-gray-600 m4-4 text-md">
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
          <button
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => (window.location.href = "/services")}
          >
            Explore Our Services
          </button>
        </header>

        <section className="flex flex-wrap justify-center gap-6 mt-10 mb-10 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Wide Range of Services
            </h3>
            <p className="text-gray-600 mt-2">
              From haircuts to spa treatments, we've got you covered.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Easy Online Booking
            </h3>
            <p className="text-gray-600 mt-2">
              Book your appointment with just a few clicks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-72 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Customer Satisfaction
            </h3>
            <p className="text-gray-600 mt-2">
              We prioritize your comfort and satisfaction.
            </p>
          </div>
        </section>

        <h1 className="text-4xl font-bold text-gray-800 uppercase font-mono mt-10">
          What our client says
        </h1>
        <section className="flex flex-wrap justify-center gap-6 mt-10 mb-10 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-72 text-center">
            <p className="text-gray-600 mt-2">
              "I absolutely loved my experience at Glow Atelier! The salon
              itself is so beautiful and relaxing. I had a wonderful haircut and
              color, and my stylist was incredibly skilled and attentive. The
              entire staff was friendly and welcoming. I left feeling pampered
              and like a new woman. Highly recommend!"
            </p>
            <h3 className="text-md font-semibold text-gray-800 text-right mt-3">
              - Isabella Rossi
            </h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-72 text-center">
            <p className="text-gray-600 mt-2">
              "Glow Atelier is a hidden gem! I've tried their facials and
              manicures, and both were top-notch. The products they use are
              luxurious, and the results were amazing. I especially appreciated
              the personalized attention and the serene atmosphere. It's the
              perfect place to unwind and treat yourself."
            </p>
            <h3 className="text-md font-semibold text-gray-800 text-right mt-3">
              - Anya Sharma
            </h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-72 text-center">
            <p className="text-gray-600 mt-2">
              "Finding Glow Atelier was a game-changer! As a busy professional,
              I needed a place where I could truly relax and feel pampered. The
              services are exceptional, and the staff is incredibly skilled.
              After my visit, I felt more confident and beautiful than ever. I
              highly recommend Glow Atelier to any woman looking to enhance her
              self-care routine."
            </p>
            <h3 className="text-md font-semibold text-gray-800 text-right mt-3">
              - David Lee
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WelcomePage;
