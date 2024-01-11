import React, { useState } from 'react';
import logoImage from '../assets/home/logo.png';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="h-14 mr-3"/>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className="text-white">Home</a>
          <a href="../AboutUs" className="text-white">About Us</a>
          <a href="../Events" className="text-white">Events</a>
          <a href="../Vendors" className="text-white">Vendors</a>
          <a href="../login" className="text-white">Login/Signup</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} id='mobile-menu-toggle' className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className='md:hidden'>
        <div className={isMenuOpen ? '' : 'hidden'} id="mobile-menu">
          <a href="/" className="block py-2 px-4 text-sm text-white">Home</a>
          <a href="../AboutUs" className="block py-2 px-4 text-sm text-white">About Us</a>
          <a href="../Events" className="block py-2 px-4 text-sm text-white">Events</a>
          <a href="../Vendors" className="block py-2 px-4 text-sm text-white">Vendors</a>
          <a href="../login" className="block py-2 px-4 text-sm text-white">Login/Signup</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
