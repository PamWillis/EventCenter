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

  return (
    <div className="container mx-auto p-4">
      <Card color="lightBlue" shadow="lg" className="mb-4 p-4">
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-auto object-cover"
          />
        )}
        <div className="p-4">
          <Typography variant="h1" color="cyan">{event.title}</Typography>
          <Typography className="my-2">{event.description}</Typography>
          <Typography className="my-2">Date: {new Date(event.date).toLocaleDateString()}</Typography>
          <Typography className="my-2">Time: {event.time}</Typography>
          <Button color="green" className="mt-4">Become a Vendor</Button>
        </div>
      </Card>
    </div>
  );
};

export default EventDetails;