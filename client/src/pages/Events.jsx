import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_EVENTS } from '../utils/queries';

const Events = () => {
  const { loading, error, data } = useQuery(GET_ALL_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { allEvents } = data;

  return (
    <div>
      <h1 className="text-3xl font-bold mt-8 mb-4">All Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allEvents.map((event) => (
          <div key={event._id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-4">{event.description}</p>
            {/* Add more event info */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;