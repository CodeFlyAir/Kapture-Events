import React, { Fragment, useState } from 'react';
import edit from '../../assets/edit.svg';
import del from '../../assets/delete.svg';
import addMore from '../../assets/addMore.svg';
import cross from '../../assets/cross.svg';
const Circle = () => {
  return <div className='rounded-full w-4 h-8 bg-pinky mx-auto'></div>;
};

const Pillar = () => {
  return <div className='w-2 h-full bg-pinky mx-auto'></div>;
};

const EventCard = ({ description: initialDescription, date: initialDate, time: initialTime, venue: initialVenue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(initialDescription);
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);
  const [venue, setVenue] = useState(initialVenue);
  const [AddEvent, setAddEvent] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform save action, e.g., update data on the server
    setIsEditing(false);
    // You can also perform other actions here, like calling an API to update the data
  };

  const handleAddEvent = () => {
    setAddEvent(true);
  };

  return (
    <div className='flex flex-col gap-y-2 shadow-md rounded-xl p-4 bg-[#323843B0] w-1/3 mx-auto relative'>
      <div className='absolute top-2 right-2'>
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <img src={edit} alt='edit' className='w-4 h-4 cursor-pointer' onClick={handleEditClick} />
        )}
        <img src={del} alt='delete' className='w-4 h-4 cursor-pointer' />
      </div>
      {isEditing ? (
        <>
          <div className='bg-slate-700 p-4 rounded' style={{ color: 'white' }}>
            <input
              className='mb-2 p-2 w-full rounded'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              type='text'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className='mb-2 p-2 w-full rounded'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              className='mb-2 p-2 w-full rounded'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              type='time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <input
              className='mb-2 p-2 w-full rounded'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              type='text'
              placeholder='Venue'
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          <h3 className='font-bold text-lg mb-2' style={{ color: 'white' }}>{description}</h3>
          <p className='text-sm mb-2' style={{ color: 'white' }}>{date} | {time}</p>
          {venue && <p className='text-xs mb-2' style={{ color: 'white' }}>{venue}</p>}
        </>
      )}

      
    </div>
  );
};

const TimelineEntry = ({ events }) => {
  const [AddEvent, setAddEvent] = useState(false);
  const handleAddEvent = () => {
    setAddEvent(true);
  };

  // Check if events is defined and is an array
  if (!Array.isArray(events)) {
    // Handle the case where events is not an array
    return <p>No events to display.</p>;
  }

  return (
    <div className='flex flex-col gap-y-3 w-full my-4'>
      <img src={addMore} alt='delete' onClick={handleAddEvent} className='w-10 h-10 cursor-pointer' />

      {AddEvent ? (
        <>
          <div className='bg-slate-700 p-4 rounded' style={{ color: 'white' }}>
            <input
              className='mb-2 p-2 w-full rounded'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              type='text'
              placeholder='Description'
             
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className='mb-2 p-2 w-full rounded'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              type='date'
             
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              className='mb-2 p-2 w-full rounded'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              type='time'
             
              onChange={(e) => setTime(e.target.value)}
            />
            <input
              className='mb-2 p-2 w-full rounded'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              type='text'
              placeholder='Venue'
             
              onChange={(e) => setVenue(e.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          
        </>
      )}
      {AddEvent ? (
          <button >Save</button>
        ) : (
          <div></div>
        )}


      {events.map((event, index) => (
        <Fragment key={event.id || index}> {/* Use event.id if available for a unique key */}
          <div className='flex items-center'>
            {index % 2 === 0 ? (
              <Fragment>
                <EventCard
                  id={event.id}
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
                  id={event.id}
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

             




// {isEditing ? (
//   <>
//     <div className='bg-slate-400 text-white p-4 border border-pinky'>
//       <input className='bg-slate-400 text-white mb-2' type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
//       <input className='bg-slate-400 text-white mb-2' type='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder='Date' />
//       <input className='bg-slate-400 text-white mb-2' type='time' value={time} onChange={(e) => setTime(e.target.value)} placeholder='Time' />
//       <input className='bg-slate-400 text-white mb-2' type='text' value={venue} onChange={(e) => setVenue(e.target.value)} placeholder='Venue' />
//     </div>
//   </>
// ) : (
//   <>
//     <h3 className='font-bold text-white text-lg mb-2'>{description}</h3>
//     <p className='text-sm mb-2 text-white'>{date} | {time}</p>
//     {venue && <p className='text-xs mb-2 text-white'>{venue}</p>}
//   </>
// )}









// {isEditing ? (
//   <>
//     <div className='bg-slate-700 p-4 rounded' style={{ color: 'white' }}>
//       <input 
//         className='mb-2 p-2 w-full rounded' 
//         style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} 
//         type='text' 
//         placeholder='Description'
//         value={description} 
//         onChange={(e) => setDescription(e.target.value)} 
//       />
//       <input 
//         className='mb-2 p-2 w-full rounded' 
//         style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}  
//         type='date'
//         // placeholder='Date'
//         value={date} 
//         onChange={(e) => setDate(e.target.value)} 
//       />
//       <input 
//         className='mb-2 p-2 w-full rounded' 
//         style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
//         type='time'
//         // placeholder='Time'
//         value={time} 
//         onChange={(e) => setTime(e.target.value)} 
//       />
//       <input
//         className='mb-2 p-2 w-full rounded'
//         style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
//         type='text'
//         placeholder='Venue'
//         value={venue}
//         onChange={(e) => setVenue(e.target.value)}
//       />
//     </div>
//   </>
// )}