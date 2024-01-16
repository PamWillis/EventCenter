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
  

    // return (
    //     <div className="container mx-auto px-4 py-8">
    //     <h1 className="text-4xl text-center font-bold mb-8">Event Center Map</h1>
    //     <div className="grid grid-cols-3 gap-4">
    //     <div className="text-center p-2" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //     <img src={eventmap} alt="Map of the Event Center" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
    //         </div>
    //     </div>
    //     </div>
    // );
    // };

export default FacilityTour;
