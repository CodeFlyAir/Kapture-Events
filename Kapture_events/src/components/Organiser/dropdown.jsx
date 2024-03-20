import React, { useState } from 'react';
import { FiSend, FiChevronDown } from 'react-icons/fi';

function DropDown() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    // Define JSON data
    const jsonData = [
        {
            date: '1st December’23 09:30',
            message: 'Congratulations! Event “Event XYZ” Approved.'
        },
        {
            date: '1st December’23 09:30',
            message: 'Congratulations! Event “Event XYZ” Approved.'
        },
        {
            date: '1st December’23 09:30',
            message: 'Congratulations! Event “Event XYZ” Approved.'
        },
        {
            date: '1st December’23 09:30',
            message: 'Congratulations! Event “Event XYZ” Approved.'
        },
        {
            date: '1st December’23 09:30',
            message: 'Congratulations! Event “Event XYZ” Approved.'
        },
        {
            date: '1st December’23 09:30',
            message: 'Congratulations! Event “Event XYZ” Approved.'
        },
        {
            date: '1st December’23 09:30',
            message: 'Congratulations! Event “Event XYZ” Approved.'
        },
        {
            date: '1st December’23 09:30',
            message: 'Congratulations! Event “Event XYZ” Approved.'
        },
        
    ];

    return (
        <>
            {/* Important Updates */}
            <h2 className="text-2xl text-white font-bold ml-10 mb-8">Important Updates from KIIT MUN</h2>

            {/* Boxes Section */}
            <div className="flex flex-col mx-10">
                {/* Map over the JSON data to render boxes */}
                {jsonData.map((item, index) => (
                    <div key={index} className="bg-gray-700 bg-opacity-70 flex items-center h-20 rounded-lg mb-4 p-4 text-white">
                        <p className="flex-none mr-8 mb-0" style={{ width: '30%' }}>{item.date}</p>
                        <p className="flex-1 mr-4 mb-0">{item.message}</p>
                        <button className="flex-none bg-pinky text-white border-none px-4 py-2 rounded-lg cursor-pointer" style={{ width: '20%' }}>Manage Event</button>
                    </div>
                ))}

                {/* Box 4 (conditionally rendered) */}
                {expanded && (
                    <div className="bg-gray-700 bg-opacity-70 flex items-center h-20 rounded-lg mb-4 p-4 text-white">
                        <p className="flex-none mr-8 mb-0" style={{ width: '30%' }}>1st December’23 09:30</p>
                        <p className="flex-1 mr-4 mb-0">Congratulations! Event “Event XYZ” Approved.</p>
                        <button className="flex-none bg-pinky text-white border-none px-4 py-2 rounded-lg cursor-pointer" style={{ width: '20%' }}>Manage Event</button>
                    </div>
                )}
            </div>

            {/* Centered Show More Button */}
            {!expanded && (
                <button className="bg-gray-700 bg-opacity-70 text-white border-none px-4 py-2 rounded-lg cursor-pointer mx-auto block mb-4" onClick={toggleExpansion}>
                    See All Updates <FiChevronDown className="text-pink-500 inline" />
                </button>
            )}

            {/* Send New Update Box */}
            <div className="bg-gray-700 bg-opacity-70 flex items-center h-20 rounded-lg mb-4 p-4 text-white mx-10">
                <input type="text" placeholder="Send New Update to Participants" className="flex-1 bg-transparent border-none text-white mr-4" />
                <button className="bg-pinky text-white border-none px-3 py-3 rounded-full cursor-pointer">
                    <FiSend size={24} />
                </button>
            </div>
        </>
    );
}

export default DropDown;
