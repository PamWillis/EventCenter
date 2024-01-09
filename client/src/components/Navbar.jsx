// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
// import SignUpForm from '../src/pages/SignupForm';
// import LoginForm from '../src/pages/LoginForm';
import React from 'react';


import AuthService from '..//utils/auth';

const Navbar = () => {
  return (
    // <nav className="bg-gray-800 p-4 lg:">
    //   <div className="container mx-auto flex justify-between items-center">
    //     {/* Logo */}
    //     <div className="text-white font-bold text-3xl">EventCenter</div>
    //     {/* Navigation links */}
    //     <ul className="hidden md:flex items-center space-x-4">
    //       <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
    //       <li><a href="../AboutUs" className="text-white hover:text-gray-300">About</a></li>
    //       {/* Alan did this one :) ^^^ */}
    //       <li><a href="../Events" className="text-white hover:text-gray-300">Events</a></li>
    //       <li><a href="../Vendors" className="text-white hover:text-gray-300">Vendors</a></li>
    //       <li><a href="../login" className="text-white hover:text-gray-300">Login</a></li>

    //     </ul>
    //   </div>
    // </nav>

    <nav class="bg-gray-800 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <a href="/" class="text-white text-lg font-semibold">EventCenter</a>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="/" class="text-white hover:text-gray-500">Home</a>
          <a href="../AboutUs" class="text-white  hover:text-gray-500">About</a>
          <a href="../Events" class="text-white  hover:text-gray-500">Events</a>
          <a href="../Vendors" class="text-white hover:text-gray-500">Vendors</a>
          <a href="../login" class="text-white hover:text-gray-500">Login</a>
        </div>
          {/* Hamburger Icon */}
        <div class="md:hidden flex items-center gap-6">
          <button id="mobile-menu-toggle" class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

      </div>
    </nav>

  );
};

export default Navbar;