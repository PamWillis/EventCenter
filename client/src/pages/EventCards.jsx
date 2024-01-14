import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from '../utils/queries';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import '../../EventCard.css';
import { Link } from 'react-router-dom';

const EventCards = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  // Handling loading state
  if (loading) return <Typography>Loading events...</Typography>;

  // Handling error state
  if (error) return <Typography>Error loading events: {error.message}</Typography>;

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

  // Rendering the event cards
  return (
    <div className="p-4">
      <div className="flex flex-wrap">
        {data && data.eventsFromAllUsers.map(event => (
          <Card key={event._id} color="lightBlue" shadow="lg" className="mb-4 p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <CardHeader color="blueGray">
              <Typography 
              variant="h3" color="cyan">
                {event.title}
              </Typography>
            </CardHeader>
            <CardBody>
              <Typography className="mt-2">
                {event.description}
              </Typography>
              <Typography className="mt-2">
                Date: {formatDate(event.date)}
              </Typography>
              <Typography className="mt-2">
                Time: {formatTime(event.time)}
              </Typography>
            </CardBody>
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="mt-2 custom-fit bg-white opacity-100"
              />
            )}
            <CardFooter>
            <Link to={`/event-detail/${event._id}`} style={{ textDecoration: 'none' }}>
            <Button color="green">
                  See More Details
            </Button>
            </Link>
              {/* <Button color="green">See More Details</Button> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventCards;