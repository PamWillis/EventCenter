import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from '../utils/queries';

const EventCards = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);
  console.log(data);
  // Handling loading state
  if (loading) return <p>Loading events...</p>;

  // Handling error state
  if (error) return <p>Error loading events: {error.message}</p>;

  // Rendering the event cards
  return (
    <div>
      {data && data.eventsFromAllUsers.map(event => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          {event.image && <img src={event.image} alt={event.title} />}
        </div>
      ))}
    </div>
  );
};

export default EventCards;