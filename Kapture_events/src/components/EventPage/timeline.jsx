import React, { Fragment } from 'react';

const eventData = [
  {
    date: 'March 10, 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    programName: 'Event 1',
    time: '10:00 AM - 12:00 PM',
    venue: 'Main Hall',
  },
  {
    date: 'March 11, 2024',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    programName: 'Event 2',
    time: '2:00 PM - 4:00 PM',
    venue: 'Conference Room',
  },
  // Add more event data as needed
];



const Circle = () => {
  return <div className='rounded-full w-4 h-8 bg-pinky mx-auto '></div>;
};

const Pillar = () => {
  return <div className='w-2 h-full bg-pinky mx-auto'></div>;
};

const EventCard = ({ date, description, time, venue }) => {
  return (
    <div className='flex flex-col gap-y-2  shadow-md rounded-xl p-4 bg-[#323843B0] w-1/3 mx-auto'>
      <h3 className='font-bold text-white text-lg  mb-2'>{description}</h3>
      <p className='text-sm mb-2 text-white'>{date} | {time}</p>
     
      {venue && <p className='text-xs mb-2 text-white'>{venue}</p>}
    </div>
  );
};

const TimelineEntry = ({ events }) => {
  return (
    <div className='flex flex-col gap-y-3 w-full my-4'>
      {events.map((event, index) => (
        <Fragment key={index}>
          <div className='flex items-center'>
            {index % 2 === 0 ? (
              <Fragment>
                <EventCard
                  date={event.date}
                  description={event.description}
                  time={event.time}
                  venue={event.venue}
                />
                <Pillar />
              </Fragment>
            ) : (
              <Fragment>
                <Pillar />
                <EventCard
                  date={event.date}
                  description={event.description}
                  time={event.time}
                  venue={event.venue}
                />
              </Fragment>
            )}
          </div>
          {index < events.length - 1 && <Circle />}
        </Fragment>
      ))}
    </div>
  );
};

export default TimelineEntry;
