// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
// import SignUpForm from '../src/pages/SignupForm';
// import LoginForm from '../src/pages/LoginForm';
import React from 'react';


import Auth from '../src/utils/auth';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-3xl">EventCenter</div>
        {/* Navigation links */}
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="../AboutUs" className="text-white hover:text-gray-300">About</a></li>
          {/* Alan did this one :) ^^^ */}
          <li><a href="../Events" className="text-white hover:text-gray-300">Events</a></li>
          <li><a href="../Vendors" className="text-white hover:text-gray-300">Vendors</a></li>
          <li><a href="../login" className="text-white hover:text-gray-300">Login</a></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;