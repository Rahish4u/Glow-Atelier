import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const images = [
  "https://images.pexels.com/photos/7755207/pexels-photo-7755207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7755558/pexels-photo-7755558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7755679/pexels-photo-7755679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4783294/pexels-photo-4783294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7755216/pexels-photo-7755216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://plus.unsplash.com/premium_photo-1664048712891-f9b6b0c62369?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFpciUyMHNhbG9ufGVufDB8fDB8fHww",
  "https://images.pexels.com/photos/3985344/pexels-photo-3985344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

function Corousal() {
  return (
    <Carousel
      showThumbs={false} // Hide thumbnails for a cleaner look
      autoPlay={true} // Enable autoplay
      infiniteLoop={true} // Loop through slides
      interval={1500} // Change slide every 1.5 seconds
      className="relative overflow-hidden" // Set relative positioning and overflow hidden
    >
      {images.map((image, index) => (
        <div key={index} className="carousel-item flex justify-center items-center min-w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] mt-4 mx-2 ">
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-fit rounded-lg shadow-lg" />
        </div>
      ))}
    </Carousel>
  );
}

export default Corousal;