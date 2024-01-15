// Events.jsx
import EventCards from './EventCards';

function Events() {
  return (
    <div className='bg-contain' style={{backgroundImage: 'url(../src/assets/home/eventsHero.jpg)'}}>
      <div className='h-40'>
      {/* <h1 className='text-4xl font-bold tracking-tight text-white bg-gray-400/10 sm:text-6xl m-6 text-center p-10'>Events</h1> */}
      </div>
      <EventCards />
    </div>
  );
}

export default Events;
