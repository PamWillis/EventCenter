
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_EVENT_DETAILS } from '../utils/queries';
import { Typography, Button } from "@material-tailwind/react";
import '../assets/css/EventDetails.css';

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

      <div color="transparent" className="flex flex-wrap mb-4 p-4 bg-gray-800 h-full w-full mx-auto">
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            className="sm:w-1/2 md:w-1/3 lg:w-1/3 h-auto object-cover"
          />
        )}
        <div className="flex-wrap p-4 bg-gray-600 rounded-lg m-5">
        <Typography className="eventtitle sm:text-xl md:text-2xl lg:text-3xl text-cyan font-bold mb-2">
      {event.title}
    </Typography>
          <Typography className="my-2 text-white ">{event.description}</Typography>
          <Typography className="my-2 text-white font-bold">Date: {formatDate(event.date)}</Typography>
          <Typography className="my-2 text-white font-bold">Time: {formatTime(event.time)}</Typography>
          <Button color="green" className="mt-4"><a href="/signUp" style={{color: "white"}}>Become a Vendor</a></Button>
        </div>
      </div>

  );
};

export default EventDetails;