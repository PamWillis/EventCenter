import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import contactImage from '../assets/home/contact.jpg'; 
import craftsmenImage from '../assets/home/craftsmen.jpg'; 

export default function Home() {
  const [Image1, setImage1] = useState(null);
  const [Image2, setImage2] = useState(null);

  useEffect(() => {
    import('../assets/home/main-ferriswheel.jpg').then((imageModule) => {
      setImage1(imageModule.default);
    });

    import('../assets/home/event-center.jpg').then((imageModule) => {
      setImage2(imageModule.default);
    });
  }, []);

  return (
    <div>
      {/* Hero Section with Container */}
      <div className="relative bg-cover bg-center" 
          style={{ height: 'calc(100vh - 100px)', backgroundImage: `url(${Image1})` }}>
        {/* ... Hero Content ... */}

        {/* Color Blocks at the bottom with hover effect */}
        <div className="absolute bottom-0 w-full flex">
          {/* Block 1 */}
          <Link to="/Events" className="w-1/3 h-24 flex justify-center items-center bg-[#0dafec] hover:opacity-75">
            <p className="text-white text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold">EVENTS</p>
          </Link>
          
          {/* Vendors */}
          <Link to="/Vendors" className="w-1/3 h-24 flex justify-center items-center bg-[#0a9f43] hover:opacity-75">
            <p className="text-white text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold">VENDORS</p>
          </Link>
          
          {/* Block 3 */}
          <Link to="/Signup" className="w-1/3 h-24 flex justify-center items-center bg-[#88192b] hover:opacity-75">
    <p className="text-white text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold">SIGN UP NOW</p>
</Link>
        </div>
      </div>

      {/* Craftsmen Section */}
      <div className="relative bg-cover bg-center" 
           style={{ height: 'calc(100vh - 100px)', backgroundImage: `url(${craftsmenImage})` }}>
        {/* ... Craftsmen Content ... */}

        {/* Color Block at the bottom with hover effect */}
        <div className="absolute bottom-0 w-full flex">
          <Link to="/Events" className="w-full h-24 flex justify-center items-center bg-[#0dafec] hover:opacity-75">
            <p className="text-white text-xl font-bold">CRAFTSMEN SYMPOSIUM</p>
          </Link>
        </div>
      </div>

      {/* Tour Section */}
      <div className="relative bg-cover bg-center" 
           style={{ height: 'calc(100vh - 100px)', backgroundImage: `url(${Image2})` }}>
        {/* ... Tour Content ... */}

        {/* Color Block at the bottom with hover effect */}
        <div className="absolute bottom-0 w-full flex">
          <Link to="/FacilityTour" className="w-full h-24 flex justify-center items-center bg-[#0dafec] hover:opacity-75">
            <p className="text-white text-xl font-bold">TOUR OUR FACILITY</p>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative bg-cover bg-center" 
           style={{ height: 'calc(100vh - 100px)', backgroundImage: `url(${contactImage})` }}>
        <div className="absolute bottom-0 w-full flex">
          <div className="w-full h-24 flex justify-center items-center bg-[#0dafec]">
            <p className="text-white text-xl font-bold text-center">CONTACT US BY CLICKING OUR NAMES AT THE BOTTOM!</p>
          </div>
        </div>
      </div>
      </div>
  );
}
