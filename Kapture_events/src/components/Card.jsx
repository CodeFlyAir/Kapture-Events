import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ eventId, image, title, organiser, address, date }) => {
    const navigate = useNavigate();

    const handleRegisterClick = async () => {
        try {
            // Construct the authorization URL
            const clientId = '454799539348-6pprtbja4g3k32l5qu1itlf1e04iugvq.apps.googleusercontent.com';
            const redirectUri = encodeURIComponent('https://kapture-events.onrender.com/login');
            const authorizationUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email%20profile`;

            // Redirect the user to the authorization URL
            window.location.href = authorizationUrl;

        } catch (error) {
            console.error('Error initiating OAuth 2.0 flow:', error);
            // Handle errors gracefully, e.g., show an error message to the user
        }
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
