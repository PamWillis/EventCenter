import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/home/logo.png';
import AuthService from '../utils/auth';
import { Button } from "@material-tailwind/react";
import '../App.css';

const Navbar = () => {

// Hides/Shows mobile menu

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //Signup

  const handleLoginSignupClick = () => {
    setShowModal(true);
  };

  //Logout

  const handleLogout = () => {
    AuthService.logout();
  };

  //Mobile menu toggle button

  const handleMobileMenuToggle = () => {
    setMobileMenuVisible(!mobileMenuVisible);
    
  };

  return (
    <nav className={`bg-gradient-to-r from-cyan-900 to-green-800 py-1.75 lg:sticky top-0 z-50 ${mobileMenuVisible ? 'header-shrink' : ''}`} id='navbar'>
      <div className="container mx-auto flex justify-between items-center">

        {/* EventsCenter Logo */}

        <div className="flex items-center align-center">
          <a href="/"><img src={logoImage} alt="EventCenter" className="h-14 mr-3 mb-3" style={{ height: "60px" }} /></a>
        </div>

        {/* DESKTOP NAVBAR */}

        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            className="nav-link"
            to="/"

          >
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            to="../AboutUs"

          >
            About Us
          </NavLink>
          <NavLink
            className="nav-link"
            to="../Events"

          >
            Events
          </NavLink>
          <NavLink
            className="nav-link"
            to="../Vendors"

          >
            Vendors
          </NavLink>
          {AuthService.loggedIn() ? (
            <>
              <NavLink
                className="nav-link"
                to="../EventCreateForm"

              >
                Create an Event
              </NavLink>
              <Button
                onClick={handleLogout}
                className="nav-link cursor-pointer logout-button"
              >
                Logout
              </Button>
            </>
          ) : (
            <NavLink
              className="nav-link" onClick={handleLoginSignupClick}
              to="../login">
              Login/Signup
            </NavLink>
          )}
        </div>

        {/* MOBILE NAVBAR */}

      {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <Button onClick={handleMobileMenuToggle} id="mobile-menu-toggle" className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navbar Links*/}

      <div className={`md:hidden ${mobileMenuVisible ? 'mobile-menu-show' : 'mobile-menu-hide'} md:flex justify-center`} id="mobile-menu">

        <NavLink to="/"
          className="nav-link block py-2 px-4 text-sm text-white">
          Home
        </NavLink>
        <NavLink to="../AboutUs"
          className="nav-link block py-2 px-4 text-sm text-white">
          About Us
        </NavLink>
        <NavLink to="../Events"
          className="nav-link block py-2 px-4 text-sm text-white">
          Events
        </NavLink>
        <NavLink to="../Vendors"
          className="nav-link block py-2 px-4 text-sm text-white">
          Vendors
        </NavLink>
        {AuthService.loggedIn() ? (
          <>
            <NavLink to="../EventCreateForm"
              className="nav-link block py-2 px-4 text-sm text-white">
              EventCreateForm
            </NavLink>
            <Button onClick={handleLogout}
              className="nav-link block py-2 px-4 text-sm text-white cursor-pointer logout-button">
              Logout
            </Button>
          </>
        ) : (
          <NavLink to="../login"
            className="nav-link block py-2 px-4 text-sm text-white"
            onClick={handleLoginSignupClick}>
            Login/Signup
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;