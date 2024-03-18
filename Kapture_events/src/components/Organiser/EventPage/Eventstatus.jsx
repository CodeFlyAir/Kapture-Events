import React from 'react';
import { FaCheck, FaQuestion } from 'react-icons/fa'; // Importing icons for tick and question mark

function EventStatus() {
    // Sample event data
    const events = [
        { date: '1st December’23', status: 'Event Created' },
        { date: '3rd December’23', status: 'Status changed to pending. Physical meeting required with Prof. Biswajit Sahoo (Director, CSE)' },
        { date: '4th December’23', status: 'Event Approved', action: 'See Details' },
        { date: '5th December’23', status: 'Registration Started', highlight: true },
    ];

    return (
        <div className="mx-10 bg-gray-700 bg-opacity-70 rounded-lg p-4 text-white">
            <h2 className="text-2xl font-bold mb-4">Event Status</h2>
            {events.map((event, index) => (
                <div key={index} className="flex items-center h-12 mb-2">
                    {event.status === 'Status changed to pending. Physical meeting required with Prof. Biswajit Sahoo (Director, CSE)' ? (
                        <div className="flex-none mr-8 mb-0 flex items-center justify-center w-8 h-8 bg-yellow-500 text-white rounded-full">
                            <FaQuestion />
                        </div>
                    ) : (
                        <div className={`flex-none mr-8 mb-0 flex items-center justify-center w-8 h-8 rounded-full ${event.status !== 'Event Approved' ? 'bg-pinky' : 'bg-blue-500'}`}>
                            <FaCheck style={{ color: 'white' }} />
                        </div>
                    )}
                    <p className="flex-none mr-8 mb-0" style={{ width: '25%' }}>{event.date}</p>
                    <p className="flex-1 mr-4 mb-0">{event.status}</p>
                    {event.action && (
                        <button className={`flex-none ${event.highlight && event.status === 'Event Approved' ? '' : 'bg-pinky'} text-white border-none px-4 py-2 rounded-lg cursor-pointer`} style={{ width: '20%' }}>
                            {event.action}
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default EventStatus;
