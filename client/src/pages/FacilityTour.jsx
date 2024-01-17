import React from 'react';
import eventmap from '../assets/home/examplemap.jpg';

const FacilityTour = () => {
    return (
      // Container with full viewport height and width, and padding
      <div style={{ height: '100vh', width: '100vw', padding: '20px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={eventmap} alt="Map of the Event Center" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </div>
    );
  };

export default FacilityTour;
