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
      <div className='bg-contain' style={{backgroundImage: 'url(../src/assets/home/eventsHero.jpg)'}}>
        <div className='h-40'>
          {/* <h1 className='text-4xl font-bold tracking-tight text-white bg-gray-400/10 sm:text-6xl m-6 text-center p-10'>Events</h1> */}
        </div>
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