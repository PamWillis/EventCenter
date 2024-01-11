import React from 'react';
import daveImage from '../assets/home/dave.jpg';
import dave2Image from '../assets/home/dave2.jpg';
import josiahImage from '../assets/home/josiah.jpg';
import alanImage from '../assets/home/alan.jpg';
import chrisImage from '../assets/home/chris.jpg';
import pamImage from '../assets/home/pam.jpg';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-center font-bold mb-8">Our Team</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Row 1 */}
        <div className="text-center">
          <img src={daveImage} alt="Dave" className="w-full" />
        </div>
        <div className="text-center">
          <img src={dave2Image} alt="Dave2" className="w-full" />
        </div>
        <div className="text-center">
          <img src={josiahImage} alt="Josiah" className="w-full" />
        </div>
        
        {/* Row 2 */}
        <div className="text-center">
          <img src={alanImage} alt="Alan" className="w-full" />
        </div>
        <div className="text-center">
          <img src={chrisImage} alt="Chris" className="w-full" />
        </div>
        <div className="text-center">
          <img src={pamImage} alt="Pam" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
