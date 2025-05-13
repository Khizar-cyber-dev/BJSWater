import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { RiCloseFill, RiMenu3Line } from 'react-icons/ri';
import logo from '../assets/images/BJSWatcerStraightIcon.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (path, element) => {
    if (window.location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        document.getElementById(element)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(element)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{opacity:0, y: -30}} 
      whileInView={{ opacity: 1 , y:0}} 
      transition={{duration:1.5}} 
      viewport={{ once: true }} 
      className="backdrop-blur-sm bg-blue-50 rounded-lg fixed top-0 left-0 w-full z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto md:mx-[4%] px-4 sm:px-6 lg:px-8 h-[80px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="BJS Logo" className="h-6 sm:h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center text-gray-700 font-medium text-base">
          <ScrollLink to="home" smooth duration={500} onClick={() => handleNavigation('/', 'home')} className="cursor-pointer hover:text-blue-600 transition">Home</ScrollLink>
          <ScrollLink to="story" smooth duration={500} onClick={() => handleNavigation('/', 'story')} className="cursor-pointer hover:text-blue-600 transition">About us</ScrollLink>
          <ScrollLink to="products" smooth duration={500} onClick={() => handleNavigation('/', 'products')} className="cursor-pointer hover:text-blue-600 transition">Products</ScrollLink>
          <ScrollLink to="footer" smooth duration={500} onClick={() => handleNavigation('/', 'footer')} className="cursor-pointer hover:text-blue-600 transition">Contact us</ScrollLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-800" aria-label={isOpen ? "Close Menu" : "Open Menu"}>
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pt-4 pb-6 shadow-md rounded-b-lg">
          <div className="flex flex-col space-y-4 text-gray-700 font-medium text-base items-start">
            <ScrollLink to="home" smooth duration={500} onClick={() => handleNavigation('/', 'home')} className="cursor-pointer hover:text-blue-600 transition">Home</ScrollLink>
            <ScrollLink to="story" smooth duration={500} onClick={() => handleNavigation('/', 'story')} className="cursor-pointer hover:text-blue-600 transition">About us</ScrollLink>
            <ScrollLink to="products" smooth duration={500} onClick={() => handleNavigation('/', 'products')} className="cursor-pointer hover:text-blue-600 transition">Products</ScrollLink>
            <ScrollLink to="footer" smooth duration={500} onClick={() => handleNavigation('/', 'footer')} className="cursor-pointer hover:text-blue-600 transition">Contact us</ScrollLink>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 justify-center">
            <a href="https://www.facebook.com/bjswater/" target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-white text-white hover:text-blue-600 border border-blue-600 p-2 rounded-lg transition">
              <FaFacebook className="text-xl" />
            </a>
            <a href="https://www.instagram.com/bjswater/" target="_blank" rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-white text-white hover:text-pink-600 border border-pink-600 p-2 rounded-lg transition">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
