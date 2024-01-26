import EventCards from './EventCards';
import EventDetails from './EventDetails';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Events.css';

function Events() {
  // Get the navigate function from react-router-dom
  const navigate = useNavigate();

  // Check if there's an eventId in the URL
  const isEventDetailsPage = window.location.pathname.split('/').length === 3;

  // If it's the main Events page, render EventCards
  if (!isEventDetailsPage) {
    const handleEventClick = (eventId) => {
      // Navigate to the EventDetails page when an event is clicked
      navigate(`/events/${eventId}`);
    };

    return (
      <div className="events-container">
        <EventCards onEventClick={handleEventClick} />
      </div>
    );
  }

  // If it's the EventDetails page, render EventDetails
  return (
    <div>
      <EventDetails />
    </div>
  );
}

export default Events;