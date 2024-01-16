import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_EVENT_DETAILS } from '../utils/queries';
import {
  Card,
  Typography,
  Button,
} from "@material-tailwind/react";

const EventDetails = () => {
  const { eventId } = useParams();
  const { loading, error, data } = useQuery(GET_EVENT_DETAILS, {
    variables: { eventId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const event = data.eventDetails;

  // Function to format the date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // Function to format the time
  const formatTime = (time) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(`2000-01-01T${time}`).toLocaleTimeString(undefined, options);
  };

  return (
    <div className="container mx-auto p-4">
      <Card color="transparent" shadow="lg" className="mb-4 p-4">
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            className="sm:w-1/2 md:w-1/3 lg:w-1/2 h-auto object-cover"
          />
        )}
        <div className="p-4">
          <Typography variant="h1" color="cyan">{event.title}</Typography>
          <Typography className="my-2">{event.description}</Typography>
          <Typography className="my-2">Date: {formatDate(event.date)}</Typography>
          <Typography className="my-2">Time: {formatTime(event.time)}</Typography>
          <Button color="green" className="mt-4">Become a Vendor</Button>
        </div>
      </Card>
    </div>
  );
};

export default EventDetails;