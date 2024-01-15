import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/home/logo.png';
import AuthService from '../utils/auth';
import { Button } from "@material-tailwind/react";
import '../App.css';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginSignupClick = () => {
    setShowModal(true);
  };

  const handleLogout = () => {
    // Use the logout function from AuthService
    AuthService.logout();
    // Optionally, redirect or perform additional actions after logout
  };

  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="h-14 mr-3" />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/"
            className="nav-link" activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink to="../AboutUs"
            className="nav-link" activeClassName="active"
          >
            About Us
          </NavLink>
          <NavLink to="../Events"
            className="nav-link" activeClassName="active"
          >
            Events
          </NavLink>
          <NavLink to="../Vendors"
            className="nav-link" activeClassName="active"
          >
            Vendors
          </NavLink>
          {AuthService.loggedIn() ? (
            <>
              <NavLink to="../EventCreateForm"
                className="nav-link" activeClassName="active"
              >
                Create an Event
              </NavLink>
              <Button
                onClick={handleLogout}
                className="font-Bree text-cyan-500 cursor-pointer logout-button"
              >
                Logout
              </Button>
            </>
          ) : (
            <NavLink to="../login"
              className="text-white" onClick={handleLoginSignupClick}>
              Login/Signup
            </NavLink>
          )}
        </div>
        <div className="md:hidden">
          <Button onClick={handleLoginSignupClick} id="mobile-menu-toggle" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </Button>
        </div>
      </div>
      <div className="md:hidden">
        <div className={showModal ? '' : 'hidden'} id="mobile-menu">
          <NavLink to="/"
            className="block py-2 px-4 text-sm text-white">
            Home
          </NavLink>
          <NavLink to="../AboutUs"
            className="block py-2 px-4 text-sm text-white">
            About Us
          </NavLink>
          <NavLink to="../Events"
            className="block py-2 px-4 text-sm text-white">
            Events
          </NavLink>
          <NavLink to="../Vendors"
            className="block py-2 px-4 text-sm text-white">
            Vendors
          </NavLink>
          {AuthService.loggedIn() ? (
            <>
              <NavLink to="../EventCreateForm"
                className="block py-2 px-4 text-sm text-white">
                EventCreateForm
              </NavLink>
              <button onClick={handleLogout}
                className="block py-2 px-4 text-sm text-white cursor-pointer">
                Logout
              </button>
            </>
          ) : (
            <NavLink to="../login"
              className="block py-2 px-4 text-sm text-white"
              onClick={handleLoginSignupClick}>
              Login/Signup
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;