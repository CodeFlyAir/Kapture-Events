



import ProfilePics from './profile';
import SpecialG from './specialG.jsx';

import twitter from '../../assets/twitter.svg';

import telegram from '../../assets/telegram.svg';

import whatsapp from '../../assets/whatsapp.svg';

import gmail from '../../assets/gmail.svg';

import Organizers from './organizer_card.jsx';

import { useParams } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import TimelineEntry from './timeline.jsx';
import React, { useState } from 'react';
import axios from 'axios';
import Add from '../../assets/addMore.svg'
import del from '../../assets/delete.svg'
import Poster from './poster.jsx';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const EventPage = ( data ) => {
 
  const { state } = useLocation();
  const { eventId, date, title } = state || {};
 
    const navigate = useNavigate();

    var description = data.data.description;
    var picture= data.data.thumbnail?.fileUrl

    
    
   const HandleSpecialGuest = () => {
     setAddEvent(!AddEvent)
   }
   
   
  
  const handleRegisterClick = () => {
   
    navigate(`/registration/${eventId}`,  { state: { eventId,date, title , description ,picture} });
  };

  const [option, setOption] = useState('Timeline');
  const [Date , setDate] = useState('1996-03-15');
  const [currentDate , setCurrentDate] = useState('1996-03-15');

  

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
  className={`font-poppins font-semibold text-xl my-6 h-8 text-white hover:underline cursor-pointer ${
    option === 'Special-Guest' ? 'font-bold text-pink-500' : ''
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
        <TimelineEntry events={data.data.subEvent} />
  )}


{option === 'Special-Guest' && (
  <div className="my-4">
    <div>
    
      {data.data.specialGuest.map((guest, index) => (
        <SpecialG
          key={index}
          picture={guest.image.fileUrl}
          name={guest.name}
          Job={guest.post}
          Date={guest.date}
          time={guest.time}
          Address={guest.venue}
        />
      ))}
    </div>
  </div>
)}




      {option === 'Sponsor' && (
        <div  className="my-4">
          {/* Sponsor content */}
         
          <div className="flex space-x-4">
            {data.data.sponsors.map((item, index) => (
              <>
            
              <img key={index} src={item.sponsor.fileUrl} alt="" className="w-20 h-20" />
              </>
            ))}
          </div>
        </div>
      )}

{option === 'Additional Details' && (
  <div className="my-4">
    {/* Additional details content */}
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-4">
        
        <div className="rounded p-4 mb-4 bg-[#323843B0]"> {/* Add mb-4 for bottom margin */}
          <h2 className="font-bold break-normal ">Team Formation Guidelines</h2>
          <p>{data.data.additionalDetails.teamFormationGuidelines}</p>
        </div>
        
        <div className="rounded p-4 mb-4 bg-[#323843B0]"> {/* Add mb-4 for bottom margin */}
       
          <h2 className="font-bold">Download Resources</h2>
          <a href={data.data.additionalDetails.resources[0].fileUrl}>{data.data.additionalDetails.resources[0].fileName}</a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4 ">
        <div className="rounded p-4 mb-4 bg-[#323843B0]"> {/* Add mb-4 for bottom margin */}
          <h2 className="font-bold">Rewards</h2>
          <p>{data.data.additionalDetails.rewards}</p>
        </div>
        
        <div className="rounded p-4 mb-4 bg-[#323843B0]"> {/* Add mb-4 for bottom margin */}
          <h2 className="font-bold  ">Eligibility Criteria</h2>
          <li>{data.data.additionalDetails.eligibilityCriteria}</li>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center rounded p-0 ml-20 mt-4 mx-auto  ">
        <div >
           
    
      {/* ... other event content ... */}
      {data.data.contact.map((guest, index) => (
        <Organizers
        
           
        picture1={guest.image.fileUrl}
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


export default EventPage ;




// {
//   "event_id": "75505947-d98c-4d4a-852d-23707bdfb742",
//   "name": "Crayons Fun",
//   "startDate": "2024-04-03",
//   "endDate": "2024-04-03",
//   "description": "Sample event description",
//   "organizerName": "Kraft",
//   "thumbnail": {
//       "fileName": "663a76d5-54d7-4614-8f0d-eee760871420_cmbio.jpeg",
//       "fileUrl": "https://storage.googleapis.com/download/storage/v1/b/kapture-events/o/663a76d5-54d7-4614-8f0d-eee760871420_cmbio.jpeg?generation=1710513597819041&alt=media"
//   },
//   "additionalDetails": {
//       "teamFormationGuidelines": "\"Ultrices suspendisse mattis faucibus vitae.\"",
//       "eligibilityCriteria": "\"Lorem ipsum dolor sit amet consectetur.\"",
//       "rewards": "\"Lorem ipsum dolor sit amet consectetur. Ultrices suspendisse mattis faucibus vitae.\"",
//       "resources": [
//           {
//               "fileName": "a0db4b4d-cd21-4f93-b71b-09a272b3a093_22627.jpg",
//               "fileUrl": "https://storage.googleapis.com/download/storage/v1/b/kapture-events/o/a0db4b4d-cd21-4f93-b71b-09a272b3a093_22627.jpg?generation=1710592973017019&alt=media"
//           }
//       ]
//   },
//   "sponsors": [
//       {
//           "sponsor": {
//               "fileName": "7c78a40f-c0a9-4122-8785-c9448f7d9ac6_81660963.jpg",
//               "fileUrl": "https://storage.googleapis.com/download/storage/v1/b/kapture-events/o/7c78a40f-c0a9-4122-8785-c9448f7d9ac6_81660963.jpg?generation=1710526750317704&alt=media"
//           }
//       },
//       {
//           "sponsor": {
//               "fileName": "a2e52343-a99c-437f-9a2f-d8ce9f9a63c4_81660963.jpg",
//               "fileUrl": "https://storage.googleapis.com/download/storage/v1/b/kapture-events/o/a2e52343-a99c-437f-9a2f-d8ce9f9a63c4_81660963.jpg?generation=1710527212571124&alt=media"
//           }
//       },
//       {
//           "sponsor": {
//               "fileName": "bd0f20f8-6f64-41e4-bad4-7202867db8d1_81660963.jpg",
//               "fileUrl": "https://storage.googleapis.com/download/storage/v1/b/kapture-events/o/bd0f20f8-6f64-41e4-bad4-7202867db8d1_81660963.jpg?generation=1710530743547321&alt=media"
//           }
//       }
//   ],
//   "contact": [
//       {
//           "name": "Soumya",
//           "post": "Coordinator",
//           "contact": 8947817471,
//           "email": "soumya@gmail.com",
//           "image": {
//               "fileName": "a6e4aa28-e484-4cfb-a778-8d782d26a323_linkedin-profile-picture.jpg",
//               "fileUrl": "https://storage.googleapis.com/download/storage/v1/b/kapture-events/o/a6e4aa28-e484-4cfb-a778-8d782d26a323_linkedin-profile-picture.jpg?generation=1710591742260720&alt=media"
//           }
//       }
//   ],
//   "specialGuest": [
//       {
//           "image": {
//               "fileName": "ddeeb0a0-a293-4237-a4f0-db72de99a2ca_22627.jpg",
//               "fileUrl": "https://storage.googleapis.com/download/storage/v1/b/kapture-events/o/ddeeb0a0-a293-4237-a4f0-db72de99a2ca_22627.jpg?generation=1710529182765973&alt=media"
//           },
//           "name": "Jack Ryan",
//           "post": "IAS",
//           "date": "2024-02-08T00:00:00.000+00:00",
//           "time": "2024-02-08T10:00:00.000+00:00",
//           "venue": "Sub Event Venue 1"
//       }
//   ],
//   "societyId": {
//       "id": 3,
//       "contact": 1234567890,
//       "emailId": "kraft@kiit.ac.in",
//       "societyName": "Kraft",
//       "events": []
//   },
//   "subEvent": [
//       {
//           "name": "Sub Event 1",
//           "desc": null,
//           "date": "2024-04-03T00:00:00.000+00:00",
//           "time": "2024-04-03T10:00:00Z",
//           "venue": "Sub Event Venue 1"
//       },
//       {
//           "name": "Sub Event 2",
//           "desc": null,
//           "date": "2024-04-03T00:00:00.000+00:00",
//           "time": "2024-04-03T14:00:00Z",
//           "venue": "Sub Event Venue 2"
//       }
//   ],
//   "updates": null,
//   "eventStatus": [
//       {
//           "date": "2024-04-03T00:00:00.000+00:00",
//           "status": "pending"
//       }
//   ],
//   "socialMedia": {
//       "instagram": "www.instagram.com",
//       "facebook": "www.facebook.com",
//       "other": null
//   },
//   "approvalRequest": {
//       "eventId": "75505947-d98c-4d4a-852d-23707bdfb742",
//       "status": "pending"
//   },
//   "registeredStudents": [
//       {
//           "id": 52
//       },
//       {
//           "id": 102
//       },
//       {
//           "id": 152
//       }
//   ]
// }