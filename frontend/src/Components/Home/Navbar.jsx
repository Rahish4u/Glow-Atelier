import React from 'react'

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="bg-pink-700 uppercase">
      <div className="container mx-auto px-2 flex items-center justify-between py-2 ">
        <div className="text-white text-2xl font-bold font-serif flex justify-between items-center gap-5">
          <img src="https://t3.ftcdn.net/jpg/03/75/67/74/360_F_375677469_UzQt3JpGywuXxkOlCkG7SJXXbiGsampv.jpg" alt="" className='w-15 h-12 rounded-xl' />
          <h1>Glow Atelier</h1>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu"
          className="lg:flex flex-col lg:flex-row lg:space-x-2 fixed lg:static right-2 top-16 w-[20%] lg:w-auto bg-pink-500 lg:bg-transparent hidden  mt-1 font-mono z-10 text-sm"
        >
          <a
            href="/"
            className="text-white block px-4 py-2 hover:bg-pink-700 lg:hover:bg-transparent lg:inline-block"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white block px-4 py-2 hover:bg-pink-700 lg:hover:bg-transparent lg:inline-block"
          >
            About
          </a>
          <a
            href="/services"
            className="text-white block px-4 py-2 hover:bg-pink-700 lg:hover:bg-transparent lg:inline-block"
          >
            Services
          </a>
        
          <a
            href="/appointment"
            className="text-white block px-4 py-2 hover:bg-pink-700 lg:hover:bg-transparent lg:inline-block"
          >
           Appointment
          </a>

         

          <button>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
