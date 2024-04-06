



import ProfilePics from './profile';
import SpecialG from '../Organiser/specialG.jsx';

import cross from '../../assets/cross.svg'

import twitter from '../../assets/twitter.svg';

import telegram from '../../assets/telegram.svg';

import whatsapp from '../../assets/whatsapp.svg';

import gmail from '../../assets/gmail.svg';

import Organizers from './organizer_card.jsx';

import { json, useParams } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import TimelineEntry from './timeline.jsx';
import React, { useState } from 'react';
import axios from 'axios';
import Add from '../../assets/addMore.svg'
import del from '../../assets/delete.svg'
import Poster from './poster.jsx';
import edit from '../../assets/edit.svg'

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const EventPage = (data) => {

  const { state } = useLocation();
  const { eventId, date, title } = state || {};
  const [imageUrl, setImageUrl] = useState(null);

  const navigate = useNavigate();

  var description = data.data.description;
  var picture = data.data.thumbnail?.fileUrl
  

  const [AddEvent, setAddEvent] = useState(false);
  const [AddSponsor, setAddSponsor] = useState(false);
  const [AddSpecialGuest, setAddSpecialGuest] = useState(false);
  const [EditTeamGuideline, setEditTeamGuideline] = useState(false);
 
  
  const [TeamGuidelines, setTeamGuidelines] = useState(data.data.additionalDetails?.teamFormationGuidelines || "No Data");
  
  console.log(data.data.additionalDetails);
  console.log("timeline data",data.data.additionalDetails?.teamFormationGuidelines);
  console.log("data is",TeamGuidelines);
  // response.data.teamFormationGuidelines
  // data.data.additionalDetails?.teamFormationGuidelines
  

  const HandleSpecialGuestCross = () => { 
    setAddSpecialGuest(false);
  }


  const HandleSpecialGuest = () => {
    setAddSpecialGuest(!AddSpecialGuest)
  }




  const handleRegisterClick = () => {

    navigate(`/registration/${eventId}`, { state: { eventId, date, title, description, picture } });
  };

  const [option, setOption] = useState('');
  const [dt, setdt] = useState('');
  const [post , setPost] = useState('');
  const [Description, setDescription] = useState('');
  const [Time, setTime] = useState('');
  const [Venue, setVenue] = useState('Sub Event Venue 1');
  const [image, setImage] = useState(null);
  const [Name, setName] = useState('xyz');
  

  const HandleAddSponser = () => {  // Function to handle add sponsor   
    setAddSponsor(!AddSponsor);
  }

  
  

  const HandleDeleteSponsor = (fileName) => {
    axios.delete(`https://kapture-events.onrender.com/events/delete-sponsor?event-id=${eventId}&file-name=${fileName}`)
      .then(response => {
        console.log(response.data);
        alert('Sponsor deleted successfully!');
        // navigate(-1); // Navigate back to the previous page
        // You can reset the form data here if needed
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('Error adding sponsor. Please try again later.');
      });
  };


const HandlesaveAddSponser = async () => {
  const response = await fetch(imageUrl);
  const fileData = await response.blob(); // Get the file data as a Blob object
  const formData = new FormData();
  formData.append('image', fileData);
   // Check formData in the console to ensure it contains the file data

  axios.post(`http://kapture-events.onrender.com/events/add-sponsor?event-id=${eventId}`, formData)
    .then(response => {
     
      alert('Sponsor added successfully!');
      // navigate(-1); // Navigate back to the previous page
      // You can reset the form data here if needed
    })
    .catch(error => {
      alert('Error adding sponsor. Please try again later.');
      console.error('There was an error!', error);
      
    });
};



const HandleAddSpecialguest = async (event) => {
  setAddSpecialGuest(false);
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Assuming you have already defined Time, dt, and other variables like description, Venue, etc.

  // Create a dt object with the dt and time combined
  const dtTimeString = `${dt}T${Time}:00.000Z`;
  const eventdtTime = new Date(dtTimeString);

  // Convert the dt object to a timestamp string
  const formattedTime = eventdtTime.toISOString();

  // Construct the JSON data object
  const jsonData = {
    'name': Name,
    'post': post,
    'date': dt, // Assuming dt is already defined
    'time': formattedTime,
    'venue': Venue
  };


  // Create a FormData object and append JSON data
  const formData2 = new FormData();
  formData2.append('jsonData', new Blob([JSON.stringify(jsonData)], { type: 'application/json'}));

  // Fetch the image and append it to formData
  const response = await fetch(image);
  const fileData = await response.blob();
  formData2.append('image', fileData);
  

  // Set the headers for the request
  const config = {
    headers: {
      // 'Content-Type': 'multipart/form-data'
    }
  };

  try {
    // Make the POST request using axios
    const response = await axios.post(`https://kapture-events.onrender.com/events/add-special-guest?event-id=${eventId}`, formData2, config);
    
    // Handle the response accordingly
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const HandleTeamGuidelineEdit = () => {
  setEditTeamGuideline(!EditTeamGuideline);
   
}

// const HandleSaveEditTeamGuideline = async () => {
  const HandleSaveEditTeamGuideline = async () => {
    console.log("dc at axios" ,TeamGuidelines);
   
    axios.post(`https://kapture-events.onrender.com/events/edit-team-formation-guidelines?event-id=${eventId}`, {
      data: TeamGuidelines
    })
        .then(response => {
          const teamFormationGuidelines = response.data.data;
          console.log('Team Formation Guidelines:', teamFormationGuidelines);
          alert('Edited submitted successfully!');
         
            // You can reset the form data here if needed
        })
        .catch(error => {
            console.error('There was an error!', error);
            alert('Error submitting . Please try again later.');
        });
};











return (
  <>
    <Poster picture={data.data.thumbnail?.fileUrl} />


    <div className="container mx-auto p-4 text-white">
      <div className="grid grid-cols-2  justify-between">
        <div className='space-x-2 text-pinky font-poppins '>{'KIIT CAMPUS'}    |    {data.data.startDate}

        </div>
        <div className='flex flex-row ml-auto'>
          <p className='mx-1'>Share: </p>
          <img
            src={twitter}
            alt=""
            className="w-4 h-4 my-1 mx-1"
            onClick={() => window.open(data.data.socialMedia.instagram, '_blank')}
          />
          <img
            src={telegram}
            alt=""
            className="w-4 h-4 my-1 mx-1"
            onClick={() => window.open(data.data.socialMedia.instagram, '_blank')}
          />

          <img
            src={whatsapp}
            alt=""
            className="w-4 h-4 my-1 mx-1"
            onClick={() => window.open(data.socialMedia.instagram, '_blank')}
          />

          <img
            src={gmail}
            alt=""
            className="w-4 h-4 my-1 mx-1"
            onClick={() => window.open(data.socialMedia.instagram, '_blank')}
          />

        </div>

      </div>
      <div className='grid grid-cols-2  justify-between'>
        <div className="text-4xl my-4 font-poppins font-bold">{data.data.name}</div>
        <div className='ml-auto my-4 text-xl '>Registration Fee : ₹350</div>
      </div>
      <div>

      </div>
      <p className="my-4 text-sm">{data.data.description}</p>
      <div className="flex space-x-8 my-4">
        <div
          className={`font-poppins font-semibold text-xl h-8 my-6 text-white hover:underline ${option === 'Timeline' ? 'font-bold text-pink-500' : ''}`}
          onClick={() => setOption('Timeline')}
        >
          Timeline
        </div>

        <div
          className={`font-poppins font-semibold text-xl my-6 h-8 text-white hover:underline cursor-pointer ${option === 'Special-Guest' ? 'font-bold text-pink-500' : ''
            }`}
          onClick={() => setOption('Special-Guest')}
        >
          Special Guest
        </div>

        <div

          className={`font-poppins font-semibold text-xl h-8 my-6 text-white hover:underline ${option === 'Sponsor' ? 'text-pink-500' : ''}`}

          onClick={() => setOption('Sponsor')}
        >
          Sponsor
        </div>
        <div

          className={`font-poppins font-semibold text-xl h-8 my-6 text-white hover:underline ${option === 'Additional Details' ? ' text-pink-500' : ''}`}
          onClick={() => setOption('Additional Details')}
        >
          Additional Details
        </div>
      </div>


      {/* Timeline content */}


      {option === 'Timeline' && (
        <TimelineEntry events={data.data.subEvent} eventId={eventId} />
      )}
   

{option === 'Special-Guest' && (
 <div className="my-4 flex flex-col gap-y-3 w-full">
 <div className="flex justify-start">  
   <img src={Add} alt='add' className='flex float-start w-10 h-10 cursor-pointer' onClick={HandleSpecialGuest} />
    </div>
    {AddSpecialGuest && (
      <div className='bg-slate-700 p-4 rounded w-72' style={{ color: 'white' }}>
        <img src={cross} alt='delete ' className='w-4 h-3 cursor-pointer my-3' onClick={HandleSpecialGuestCross} />
            <input
              className='mb-2 p-2 w-full rounded'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              type='text'
              placeholder='Name '
             
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='mb-2 p-2 w-full rounded'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              type='date'
             
              onChange={(e) => setdt(e.target.value)}
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
              placeholder='Post' 
             
              onChange={(e) => setPost(e.target.value)}
            />
            <input
              className='mb-2 p-2 w-full rounded'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              type='text'
              placeholder='Venue'
             
              onChange={(e) => setVenue(e.target.value)}
            />
       <input
        className='mb-2 p-2 w-full rounded'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        type='file'
        accept='image/*'
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
              setImage(event.target.result);
            };
            reader.readAsDataURL(file);
          }
        }}
      />
        {image && (
          <img
            className='mt-2 w-full rounded max-h-300px'
            src={image}
            alt='Event'
          />
        )}
        <button onClick={HandleAddSpecialguest}>Save</button>
      </div>
    )}
    <div className="mt-4">
   
      {data.data.specialGuest && data.data.specialGuest.map((guest, index) => (
        
        <SpecialG
         fileName={guest.image.fileName}
          eventId={eventId}
          picture={guest.image.fileUrl}
          name={guest.name}
          Job={guest.post}
          dt={guest.dt}
          time={guest.time}
          Address={guest.venue}
        />
      ))}
    </div>
  </div>
)}




{option === 'Sponsor' && (
  <div className="my-4 flex justify-between">
    <div className="flex-grow">
      {AddSponsor && (
        <div className='bg-slate-700 p-4 rounded text-white'>
         <input
        className='mb-2 p-2 w-full rounded'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        type='file'
        accept='image/*'
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
              setImageUrl(event.target.result);
            };
            reader.readAsDataURL(file);
          }
        }}
      />

          {imageUrl && (
            <img
              className='mt-2 w-full rounded max-h-300px'
              src={imageUrl}
              alt='Sponsor'
            />
          )}
          <button onClick={HandlesaveAddSponser}>Save</button>
        </div>
      )}
      <div className="flex space-x-4 mt-4">
        {data.data.sponsors && data.data.sponsors.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={del}
              alt='delete'
              className='w-4 h-4 cursor-pointer mb-2'
              onClick={() => HandleDeleteSponsor(item.sponsor.fileName)}
            />
            <img src={item.sponsor.fileUrl} alt={`Sponsor ${index}`} className="w-20 h-20 rounded-full border-2 border-pinky mx-3" />
          </div>
        ))}
      </div>
    </div>
    <img src={Add} alt='add' className='w-10 h-10 cursor-pointer' onClick={HandleAddSponser} />
  </div>
)}



{option === 'Additional Details' && (
  <div className="my-4">
    {/* Additional details content */}
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-4">

        <div className="rounded p-4 mb-4 bg-[#323843B0]">
          <div className='flex flex-row space-x-4'>
            <div>
             <h2 className="font-bold break-normal">Team Formation Guidelines</h2>
             </div>
             {/* <div className=''>
             <img src={edit} alt='edit' className='mt-2 cursor-pointer' onClick={HandleTeamGuidelineEdit} />
             </div> */}
          </div>
          {EditTeamGuideline ? (
                <div className='bg-slate-700 p-4 rounded w-72' style={{ color: 'white' }}>
                  <input
                   style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    type="text"
                    value={TeamGuidelines}
                    onChange={(e) => setTeamGuidelines(e.target.value)}
                    className="border border-gray-400 px-2 py-1 rounded"
                  />
                  <button onClick={HandleSaveEditTeamGuideline} className="px-2 py-1 bg-blue-500 text-white rounded m-2">Save</button>
                  {/* <button onClick={handleCancelClick} className="px-2 py-1 bg-red-500 text-white rounded">Cancel</button> */}
                </div>
              ) : (
                <>
                  <p>{ data.data.additionalDetails?.teamFormationGuidelines  || "No Data"}</p>
                  <img src={edit} alt='edit' className='mt-2 cursor-pointer' onClick={HandleTeamGuidelineEdit} />
                </>
              )}
        </div>
        {/* data.data.additionalDetails.teamFormationGuidelines */}
        <div className="rounded p-4 mb-4 bg-[#323843B0]">
        
          <img src={del} alt='edit' className='w-4 h-4 cursor-pointer' />
          <h2 className="font-bold">Download Resources</h2>
          {data.data.additionalDetails.resources && data.data.additionalDetails.resources.length > 0 ? (
            <a href={data.data.additionalDetails.resources[0].fileUrl}>
              {data.data.additionalDetails.resources[0].fileName || "No Data"}
            </a>
          ) : (
            <p>No Data</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="rounded p-4 mb-4 bg-[#323843B0]">
        <div className='flex flex-row space-x-4'>
            <div>
              <h2 className="font-bold">Rewards</h2>
          </div>
          <div className=''>
             <img src={edit} alt='edit' className='mt-2 cursor-pointer'  />
          </div>
          </div>
          <p>{data.data.additionalDetails.rewards || "No Data"}</p>
         
        </div>

        <div className="rounded p-4 mb-4 bg-[#323843B0]">
        <div className='flex flex-row space-x-4'>
          <div>
          <h2 className="font-bold">Eligibility Criteria</h2>
          </div>
          <div>
          <img src={edit} alt='edit' className='mt-2 cursor-pointer '  />
          </div>
        </div>
          <li>{data.data.additionalDetails.eligibilityCriteria || "No Data"}</li>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center rounded p-0 ml-20 mt-4 mx-auto">
        
        <div>
          {/* Render event content */}
          {data.data.contact && data.data.contact.map((guest, index) => (
            <Organizers
              key={index}
              picture1={guest.image?.fileUrl || ""}
              name1={guest.name}
              Job1={guest.post}
              p_no1={guest.contact}
              gmail1={guest.email}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)}

    </div>
    <div className='flex justify-center'>
      <button className="bg-pinky hover:bg-blue-700 text-white font-bold mx-auto text-center rounded mt-4 md:mt-0 h-10 w-auto px-4 " onClick={handleRegisterClick}>
        Register Now
      </button>
    </div>
  </>

);
};


export default EventPage;




