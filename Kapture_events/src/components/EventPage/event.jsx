import React, { useState } from 'react';
import ProfilePics from './profile';
import SpecialG from './specialG.jsx';

import twitter from '../../assets/twitter.svg';

import telegram from '../../assets/telegram.svg';

import whatsapp from '../../assets/whatsapp.svg';

import gmail from '../../assets/gmail.svg';

import Organizers from './organizer_card.jsx';

import TimelineEntry from './timeline.jsx';
const EventPage = ({ data }) => {
  const [option, setOption] = useState('Timeline');
  const [Date , setDate] = useState('1996-03-15');
  const [currentDate , setCurrentDate] = useState('1996-03-15');
   
  function settings (date){
    setDate(date);
    setCurrentDate(date);
   }

  return (
    <>
    <div className="container mx-auto p-4 text-white">
      <div className="grid grid-cols-2  justify-between">
        <div className='space-x-2 text-pinky font-poppins '>{data.address}    |    {data.date}
        
        </div>
        <div className='flex flex-row ml-auto'>
          <p className='mx-1'>Share: </p>
        <img src={twitter} alt="" className="w-4 h-4 my-1 mx-1" />
        <img src={telegram} alt="" className="w-4 h-4 my-1 mx-1" />
        <img src={whatsapp} alt="" className="w-4 h-4 my-1 mx-1" />
        <img src={gmail} alt="" className="w-4 h-4 my-1 mx-1" />
        </div>
        
      </div>
      <div className='grid grid-cols-2  justify-between'>
      <div className="text-4xl my-4 font-poppins font-bold">{data.name}</div>
      <div className='ml-auto my-4 text-xl '>Registration Fee : ₹350</div>
      </div>
      <div>
          
      </div>
      <p className="my-4 text-sm">{data.description}</p>
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
        <TimelineEntry events={data.timeline.date} />
  )}


      {option === 'Special-Guest' && (
        <div  className="my-4">
           
           <div>
      {/* ... other event content ... */}
      {data.specialGuest.map((guest, index) => (
        <SpecialG
          
        picture={SpecialG}
        name={guest.name}
        Job={guest.jobProfile}
        Date={guest.dateOfEvent}
        time={guest.timeOfEvent}
        Address={guest.address}
          
          
          
        />
       
      ))}
    </div>
          
         

        </div>
      )}

      {option === 'Sponsor' && (
        <div  className="my-4">
          {/* Sponsor content */}
          <div className="flex space-x-4">
            {data.sponsor.map((item, index) => (
              <img key={index} src={item.image} alt="" className="w-20 h-20" />
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
          <p>{data.teamFormationGuidelines}</p>
        </div>
        
        <div className="rounded p-4 mb-4 bg-[#323843B0]"> {/* Add mb-4 for bottom margin */}
          <h2 className="font-bold">Download Resources</h2>
          <a href={data.eventSchedule}>Download</a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4 ">
        <div className="rounded p-4 mb-4 bg-[#323843B0]"> {/* Add mb-4 for bottom margin */}
          <h2 className="font-bold">Rewards</h2>
          <p>{data.reward}</p>
        </div>
        
        <div className="rounded p-4 mb-4 bg-[#323843B0]"> {/* Add mb-4 for bottom margin */}
          <h2 className="font-bold  ">Eligibility Criteria</h2>
          <li>{data.eligibilityCriteria}</li>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center rounded p-0 ml-20 mt-4 mx-auto  ">
        <div >
           
    
      {/* ... other event content ... */}
      {data.organizer.map((guest, index) => (
        <Organizers
        
           
        picture1={SpecialG}
        name1={guest.name}
        Job1={guest.jobProfile}
        p_no1={guest.contact}
        gmail1={guest.email}

        picture2={SpecialG}
        name2={guest.name}
        Job2={guest.jobProfile}
        p_no2={guest.contact}
        gmail2={guest.email}
        />
       
      ))}
   
        </div>
      </div>
    </div> 
  </div>
)}
   
      </div>
      <div className='flex justify-center'>
    <button className="bg-pinky hover:bg-blue-700 text-white font-bold mx-auto text-center rounded mt-4 md:mt-0 h-10 w-auto px-4">
          Register Now
        </button>
        </div>
      </>
      
  );
};


export default EventPage;
