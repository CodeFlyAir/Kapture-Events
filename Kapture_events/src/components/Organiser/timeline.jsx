import React, { Fragment, useState } from 'react';
import edit from '../../assets/edit.svg';
import del from '../../assets/delete.svg';
import addMore from '../../assets/addMore.svg';
import cross from '../../assets/cross.svg';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
const Circle = () => {
  return <div className='rounded-full w-4 h-8 bg-pinky mx-auto'></div>;
};

const Pillar = () => {
  return <div className='w-2 h-full bg-pinky mx-auto'></div>;
};

const EventCard = ({ description: initialDescription, dt: initialdt, time: initialTime, venue: initialVenue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(initialDescription);
  const [dt, setdt] = useState(initialdt);
  const [time, setTime] = useState(initialTime);
  const [venue, setVenue] = useState(initialVenue);
  const [AddEvent, setAddEvent] = useState(false);

  const HandleTimelineDelete = () => {
    // Declare formData at the top level of the function
    let formData;
  
    // Ensure that dt and time are valid and correctly formatted
    // Example format: dt = '2024-03-23', time = '14:30'
    const dtTimeString = `${dt}T${time}:00.000Z`;
  
    try {
      console.log(dtTimeString);
      const eventdtTime = new Date(dtTimeString);

      console.log(eventdtTime);
  
      if (isNaN(eventdtTime.getTime()) || !isValidTime(time)) {
        throw new Error('Invalid date or time value');
      }
  
      const formattedTime = eventdtTime.toISOString();
  
      // Assign values to formData
      formData = {
        'desc': description,
        'dt': dt,
        'time': formattedTime,
        'venue': venue
      };
  
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        data: formData // Data to be sent with the DELETE request
      };
  
      // Use formData within the axios call
      axios.delete(`https://kapture-events.onrender.com/events/delete-sub-event?event-id=${eventId}`, config)
        .then(response => {
          console.log(response.data);
          alert('Timeline deleted successfully!');
          // navigate(-1); // Navigate back to the previous page
        })
        .catch(error => {
          console.error('There was an error!', error);
          alert('Error deleting timeline. Please try again later.');
        });
    } catch (error) {
      console.error('Error constructing dt:', error);
      alert('Invalid date or time. Please check your inputs.');
    }
  };
  
  // Function to validate time format (HH:mm)
  const isValidTime = (time) => {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(time);
  };
  
  
  

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform save action, e.g., updt data on the server
    setIsEditing(false);
    // You can also perform other actions here, like calling an API to updt the data
  };

  const handleAddEvent = () => {
    setAddEvent(true);
  };

  return (
    <div className='flex flex-col gap-y-2 shadow-md rounded-xl p-4 bg-[#323843B0] w-1/3 mx-auto relative'>
      <div className='absolute top-2 right-2'>
    <img src={del} alt='delete' className='w-4 h-4 cursor-pointer' onClick={HandleTimelineDelete} /> 
        {/* {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <img src={edit} alt='edit' className='w-4 h-4 cursor-pointer' onClick={handleEditClick} />
        )}
        <img src={del} alt='delete' className='w-4 h-4 cursor-pointer' /> */}
      </div>
      {/* {isEditing ? (
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
              type='dt'
              value={dt}
              onChange={(e) => setdt(e.target.value)}
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
          <p className='text-sm mb-2' style={{ color: 'white' }}>{dt} | {time}</p>
          {venue && <p className='text-xs mb-2' style={{ color: 'white' }}>{venue}</p>}
        </>
      )} */}

<h3 className='font-bold text-lg mb-2' style={{ color: 'white' }}>{description}</h3>
          <p className='text-sm mb-2' style={{ color: 'white' }}>{dt} | {time}</p>
          {venue && <p className='text-xs mb-2' style={{ color: 'white' }}>{venue}</p>}
    </div>
  );
};

const TimelineEntry = ({ events ,eventId }) => {
  const [AddEvent, setAddEvent] = useState(false);
  const [description, setDescription] = useState(events.description);
  const [dt, setDt] = useState(events.dt);
  const [time, setTime] = useState(events.time);
  const [venue, setVenue] = useState(events.venue);

  

  // const navigate = Navigate();

  const handleAddButton = () => {
    setAddEvent(!AddEvent);
  }

  const handleAddEvent = () => {
    const dtTimeString = `${dt}T${time}:00.000Z`;
    const eventdtTime = new dt(dtTimeString);
  
    // Convert the dt object to a timestamp string
    const formattedTime = eventdtTime.toISOString();
  
    const formData = {
      'desc': description,
      'dt': dt,
      'time': formattedTime,
      'venue': venue
    }
  
    console.log(formData);
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  
    axios.post(`https://kapture-events.onrender.com/events/add-sub-event?event-id=${eventId}`, formData, config)
      .then(response => {
        console.log(response.data);
        alert('Registration submitted successfully!');
        // Navigate back to the previous page
        // You can reset the form data here if needed
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('Error submitting registration. Please try again later.');
      });
  };
  
  

  // Check if events is defined and is an array
  if (!Array.isArray(events)) {
    // Handle the case where events is not an array
    return <p>No events to display.</p>;
  }

  return (
    <div className='flex flex-col gap-y-3 w-full my-4'>
      <img src={addMore} alt='delete' onClick={handleAddButton} className='w-10 h-10 cursor-pointer' />

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
              type='dt'
             
              onChange={(e) => setDt(e.target.value)}
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
             <button onClick={handleAddEvent} >Save</button>
          </div>
        </>
      ) : (
        <>
          
        </>
      )}
      {AddEvent ? (
          // <button onClick={handleAddEvent} >Save</button>
          <div> </div>
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
                  dt={event.date}
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
                  dt={event.date}
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

             