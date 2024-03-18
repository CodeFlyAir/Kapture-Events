import React from 'react';
import sadface from '../assets/sadface.svg';

const eventData = [
  {
    "date": "1st December’23 09:30",
    "message": "Congratulations! Event “Event XYZ” Approved."
  },
  {
    "date": "2nd December’23 10:00",
    "message": "Congratulations! Event “Event ABC” Approved."
  },
  {
    "date": "3rd December’23 11:00",
    "message": "Congratulations! Event “Event DEF” Approved."
  },
  {
    "date": "4th December’23 12:00",
    "message": "Congratulations! Event “Event GHI” Approved."
  }
];

function Organisation() {
    return (
        <>
            {/* Boxes Section */}
            <div className="flex flex-col mx-10">
                {eventData.map((event, index) => (
                    <div key={index} className="bg-gray-700 bg-opacity-70 flex items-center h-20 rounded-lg mb-4 p-4 text-white">
                        <p className="flex-none mr-8 mb-0" style={{ width: '30%' }}>{event.date}</p>
                        <p className="flex-1 mr-4 mb-0">{event.message}</p>
                        <button className="flex-none bg-pinky text-white border-none px-4 py-2 rounded-lg cursor-pointer" style={{ width: '20%' }}>Manage Event</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Organisation;
