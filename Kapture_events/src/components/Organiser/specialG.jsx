
import React from 'react'
import SpecialGx from '../../assets/special_guest.jpg'
import del from '../../assets/delete.svg'
import axios from 'axios';

export default function SpecialG({fileName,eventId,picture,name,Job,Date,time,Address}) {

  const HandleDelete = () => {
    console.log(name);
    axios.delete(`https://kapture-events.onrender.com/events/delete-special-guest?event-id=${eventId}&name=${name}&file-name=${fileName}`)
      .then(response => {
        console.log(response.data);
        alert(' deleted successfully!');
        // navigate(-1); // Navigate back to the previous page
        // You can reset the form data here if needed
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('Error adding spacialguest. Please try again later.');
      });
  };

return (
<figure class="md:flex rounded-xl p-8 md:p-0 bg-[#323843B0] my-6 w-1/2 mx-auto h-1/2 ">
<img src={del} alt='edit' className='w-4 h-4 mx-3 mt-2 cursor-pointer' onClick={HandleDelete} />
  <img class="w-24 h-24 md:w-48 md:h-auto  rounded-full mx-auto p-4" src={picture}  alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        {name}
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {Date}  | {time} | {Address}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
       {Job}
      </div>
    </figcaption>
  </div>
</figure>
)}

{/* <div className="my-4">
    <ul className="list-none">
      {data.timeline.date.map(event => (
    
        <li className="flex items-center my-2">
       
      
          <div className="flex-shrink-0">
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded">{event.date}</span>
          </div>
              
             

           
          <div className="flex-grow ml-4">
            <p className="font-bold">{event.time}</p>
            <p>{event.description}</p>
          </div>

        </li>
      ))}
    </ul>
    </div> */}