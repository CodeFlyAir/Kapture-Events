import React, { useState } from 'react';
import { FaCheck, FaQuestion } from 'react-icons/fa'; // Importing icons for tick and question mark

function MediaCenter() {
    // State variables for uploaded files
    const [promoFile, setPromoFile] = useState(null);
    const [prevPhotos, setPrevPhotos] = useState([]);

    // Function to handle promo file upload
    const handlePromoUpload = (e) => {
        const file = e.target.files[0];
        setPromoFile(file);
    };

    // Function to handle previous photos upload
    const handlePrevPhotosUpload = (e) => {
        const files = e.target.files;
        const updatedPrevPhotos = [...prevPhotos];
        for (let i = 0; i < files.length; i++) {
            updatedPrevPhotos.push(files[i]);
        }
        setPrevPhotos(updatedPrevPhotos);
    };

    return (
        <div className="w-1/2 pr-2">
            <div className="mx-5 bg-gray-700 bg-opacity-70 rounded-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Media Centre</h2>
                {/* Upload Event Promo */}
                <div className="mb-4 flex items-center">
                    <p className="mb-2 mr-24 text-pinky">Upload event promo (Up to 25MB)</p>
                    <label className="bg-pinky text-white border-none px-4 py-2 rounded-lg cursor-pointer mr-2">
                        Choose File
                        <input type="file" accept="video/*" className="hidden" onChange={handlePromoUpload} />
                    </label>
                    <p className="mb-0">{promoFile ? promoFile.name : "No file chosen"}</p>
                </div>
                {/* Upload Previous Photos */}
                <div className="mb-4 flex items-center">
                    <p className="mb-2 mr-9 text-pinky">Upload previous photos (Up to 25MB each)</p>
                    <label className="bg-pinky text-white border-none px-4 py-2 rounded-lg cursor-pointer mr-2">
                        Choose File
                        <input type="file" accept="image/*" multiple className="hidden" onChange={handlePrevPhotosUpload} />
                    </label>
                    {prevPhotos.length > 0 ? (
                        <ul>
                            {prevPhotos.map((photo, index) => (
                                <li key={index}>{photo.name}</li>
                            ))}
                        </ul>
                    ) : <p className="mb-0">No file chosen</p>}
                </div>
                {/* Submit Button */}
                <button className="bg-pinky text-white border-none px-4 py-2 rounded-lg cursor-pointer flex items-center">
                    <span className="ml-2">Upload</span>
                </button>
            </div>
        </div>
    );
}

function EventStatus() {
    // Sample event data
    const events = [
        { date: '1st December’23', status: 'Event Created' },
        { date: '3rd December’23', status: 'Status changed to pending. Physical meeting required with Prof. Biswajit Sahoo (Director, CSE)' },
        { date: '4th December’23', status: 'Event Approved', action: 'See Details' },
        { date: '5th December’23', status: 'Registration Started', highlight: true },
    ];

    return (
        <div className="w-1/2 pl-2">
            <div className="mx-5 bg-gray-700 bg-opacity-70 rounded-lg p-8 text-white">
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
                        
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function App() {
    return (
        <div className="flex">
            <MediaCenter />
            <EventStatus />
        </div>
    );
}
