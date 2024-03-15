

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ eventId, image, title, organiser, address, date }) => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate(`/event/${eventId}`);
    };

    return (
        <div className="max-w-sm overflow-hidden shadow-lg m-auto w-20vw mx-6 h-80 w-64 my-5 rounded-2xl items-center" style={{ backgroundColor: '#FFCFE9' }}>
            <img className="w-auto h-1/2" src={image} alt={title} />
            <div className="px-6 py-1">
                <div className="font-poppins font-bold text-lg mb-1 text-black">{title}</div>
                <p className="text-gray-700 text-sm">Organiser: {organiser}</p>
                <p className="text-gray-700 text-xs">{address} | {date}</p>
                <button
                    className="bg-pinky hover:bg-blue-700 text-white font-bold mb-2 mt-2 p-1 rounded w-full"
                    onClick={handleRegisterClick}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Card;

