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

  // Function to sort events by date
  const sortEventsByDate = (events) => {
    return events.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  // Sorting events by date
  const sortedEvents = data ? sortEventsByDate(data.eventsFromAllUsers) : [];
  

  // Rendering the event cards
  return (
    <div className="p-4 eventsHero">
      <div className="flex flex-wrap justify-center">
      {sortedEvents.map((event) => (
          // Entire Card Background
          <Card key={event._id}  className="m-5 p-5 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gray-400/10 w-fit">
            <CardHeader
            className='text-center shadow-xl mt-1 bg-transparent'>
              <Typography 
              variant="h4"
              color="cyan"
              className="mb-10"
              >
                {event.title}
              </Typography>
            </CardHeader>
            {/* Message, Date, and Time */}
            <CardBody className="bg-gray-400/25 rounded-lg">
              <Typography className="mt-2 font-semibold text-md text-gray-300">
                {event.description}
              </Typography>
              <Typography className="mt-2 font-bold underline text-sm text-gray-300">
                Date: {formatDate(event.date)}
              </Typography>
              <Typography className="mt-2 font-bold underline text-sm text-gray-300">
                Time: {formatTime(event.time)}
              </Typography>
            </CardBody>
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="mt-4 object-scale-down"
              />
            )}
            <CardFooter>
            <Link to={`/Events/${event._id}`} key={event._id}>
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