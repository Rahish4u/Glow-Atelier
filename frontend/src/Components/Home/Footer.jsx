import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-neutral-800 to-black text-white py-10 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-pink-500 mb-4">Contact Us</h3>
          <div className="space-y-2 text-white/80">
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> Sigra, Varanasi-221010</p>
            <p className="flex items-center gap-2"><FaPhoneAlt /> (123) 478-3870</p>
            <p className="flex items-center gap-2"><FaEnvelope /> glowatelier07@gmail.com</p>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-bold text-pink-500 mb-4">Opening Hours</h3>
          <div className="space-y-1 text-white/80">
            <p>Mon–Fri: 9:00 AM – 7:00 PM</p>
            <p>Sat: 10:00 AM – 6:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-pink-500 mb-4">Follow Us</h3>
          <div className="flex space-x-6 mt-2 text-white text-xl">
            <Link to="https://www.facebook.com/" target="_blank" className="hover:text-pink-400 transition-all">
              <FaFacebook />
            </Link>
            <Link to="https://www.instagram.com/#" target="_blank" className="hover:text-pink-400 transition-all">
              <FaInstagram />
            </Link>
            <Link to="https://x.com/?lang=en" target="_blank" className="hover:text-pink-400 transition-all">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-4 text-center text-white/50 text-xs">
        © {new Date().getFullYear()} Glow Atelier. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
