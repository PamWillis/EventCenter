import React from 'react';
import bannerImage from '../assets/projects/grateful-dead.png';
import noteImage from '../assets/projects/note.png';
import shopifyImage from '../assets/projects/shopify-liquid.jpg';
import weatherImage from '../assets/projects/weather.png';
import fluidImage from '../assets/projects/fluid.jpg';
import pdcImage from '../assets/projects/pdc.jpg';
import crmImage from '../assets/projects/crm-developer.jpg';




export default function Project() {
  return (
    <div className="container">
        <div className="top-image">
            <img src={bannerImage} alt="Grateful Dead" />
            {/* <img src="path-to-large-image.jpg" alt="Large Image" /> */}
        </div>
        <div className="image-grid">
            <div className="image"><img src={crmImage} alt="lego camper" /></div>
            <a href="https://fluidboats.com">
            <div className="image"><img src={fluidImage} alt="Fluid Marine" /></div></a>
            <a href="https://personalizeddoormats.com/">
            <div className="image"><img src={pdcImage} alt="The Personalized Doormats Company" /></div></a>
            <div className="image"><img src={shopifyImage} alt="lego camper" /></div>
            <a href="https://calm-tor-26404-6f5efe8d4458.herokuapp.com/">
            <div className="image">
              <img src={noteImage} alt="note taker" /></div></a>
              <a href="https://ajmecca68.github.io/mecca_weather/">
            <div className="image"><img src={weatherImage} alt="mecca weather application" /></div></a>
        </div>
    </div>
  );
}
