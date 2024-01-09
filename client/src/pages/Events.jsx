import React from 'react';
import { useGetAllEvents } from '../utils/queries';

const Events = () => {
  const { loading, error, data } = useGetAllEvents();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { eventsFromAllUsers } = data;

  return (
    <div>
      <h1>Events</h1>
      {eventsFromAllUsers.map((event) => (
        <div key={event._id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          {/* Add more event info */}
        </div>
      ))}
    </div>
  );
};

export default Events;