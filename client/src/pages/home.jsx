import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/home/main-hero.jpg'; 
import mustacheImage from '../assets/home/main-mustache.jpg'; 
import outhouseImage from '../assets/home/main-outhouse.jpg'; 
import ferriswheelImage from '../assets/home/main-ferriswheel.jpg'; 
import craftsmenImage from '../assets/home/craftsmen.jpg'; 
import buildingImage from '../assets/home/event-center.jpg'; 

export default function Home() {
  return (
    <div>
     {/* Hero Section with Container */}
     <div className="relative bg-cover bg-center" 
           style={{ height: 'calc(100vh - 100px)', backgroundImage: `url(${ferriswheelImage})` }}>
        {/* ... */}

        {/* Color Blocks at the bottom with hover effect */}
        <div className="absolute bottom-0 w-full flex">
          {/* Block 1 */}
          <Link to="/Events" className="w-1/3 h-24 flex justify-center items-center bg-[#0dafec] hover:opacity-75">
            <p className="text-white text-xl font-bold">EVENTS</p>
          </Link>
          
          {/* Block 2 */}
          <Link to="/Vendors" className="w-1/3 h-24 flex justify-center items-center bg-[#0a9f43] hover:opacity-75">
            <p className="text-white text-xl font-bold">VENDORS</p>
          </Link>
          
          {/* Block 3 */}
          <Link to="/SignupForm" className="w-1/3 h-24 flex justify-center items-center bg-[#88192b] hover:opacity-75">
            <p className="text-white text-xl font-bold">SIGN UP NOW</p>
          </Link>
        </div>
      </div>

      {/* craftsmen section */}
      <div className="relative bg-cover bg-center" 
           style={{ height: 'calc(100vh - 100px)', backgroundImage: `url(${craftsmenImage})` }}>
        {/* ... */}

        {/* Color Blocks at the bottom with hover effect */}
        <div className="absolute bottom-0 w-full flex">
          {/* Block 1 */}
          <Link to="/Events" className="w-full h-24 flex justify-center items-center bg-[#0dafec] hover:opacity-75">
            <p className="text-white text-xl font-bold">CRAFTSMEN SYMPOSIUM</p>
          </Link>
        </div>
      </div>

     {/* tour section */}
     <div className="relative bg-cover bg-center" 
           style={{ height: 'calc(100vh - 100px)', backgroundImage: `url(${buildingImage})` }}>
        {/* ... */}

        {/* Color Blocks at the bottom with hover effect */}
        <div className="absolute bottom-0 w-full flex">
          {/* Block 1 */}
          <Link to="/Events" className="w-full h-24 flex justify-center items-center bg-[#0dafec] hover:opacity-75">
            <p className="text-white text-xl font-bold">TOUR OUR FACILITY</p>
          </Link>
        </div>
      </div>

      {/* Projects Section */}
      <div className="h-screen flex justify-center items-center bg-gray-200">
        <h2 className="text-3xl font-bold">Projects</h2>
        {/* Add projects content here */}
      </div>

      {/* Contact Section */}
      <div className="h-screen flex justify-center items-center bg-white">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        {/* Add contact content here */}
      </div>
    </div>
  );
}
