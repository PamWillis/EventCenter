import EventCards from './EventCards';
import EventDetails from './EventDetails';
import { Outlet, useNavigate } from 'react-router-dom';

function Events() {
  // Get the navigate function from react-router-dom
  const navigate = useNavigate();

  // Check if there's an eventId in the URL
  const isEventDetailsPage = window.location.pathname.split('/').length === 3;

  // If it's the main Events page, render EventCards
  if (!isEventDetailsPage) {
    return (
      <div
        className="bg-contain"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/eventsHero.jpg)`,
        }}
      >
        <div className="h-40">{/* ... */}</div> {/* hero moved to public folder for deployment */}
        <EventCards />
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