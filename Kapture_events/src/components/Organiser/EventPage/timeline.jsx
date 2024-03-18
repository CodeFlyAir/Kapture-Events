import React, { Fragment } from 'react';

const Circle = () => {
  return <div className='rounded-full w-4 h-8 bg-pinky mx-auto'></div>;
};

const Pillar = () => {
  return <div className='w-2 h-full bg-pinky mx-auto'></div>;
};

const EventCard = ({ description, date, time, venue }) => {
  return (
    <div className='flex flex-col gap-y-2 shadow-md rounded-xl p-4 bg-[#323843B0] w-1/3 mx-auto'>
      <h3 className='font-bold text-white text-lg mb-2'>{description}</h3>
      <p className='text-sm mb-2 text-white'>{date} | {time}</p>
      {venue && <p className='text-xs mb-2 text-white'>{venue}</p>}
    </div>
  );
};

const TimelineEntry = ({ events }) => {
  // Check if events is defined and is an array
  if (!Array.isArray(events)) {
    // Handle the case where events is not an array
    return <p>No events to display.</p>;
  }

  return (
    <div className='flex flex-col gap-y-3 w-full my-4'>
      {events.map((event, index) => (
        <Fragment key={event.id || index}> {/* Use event.id if available for a unique key */}
          <div className='flex items-center'>
            {index % 2 === 0 ? (
              <Fragment>
                <EventCard
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  venue={event.venue}
                />
                <Pillar />
              </Fragment>
            ) : (
              <Fragment>
                <Pillar />
                <EventCard
                  description={event.description}
                  date={event.date}
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
