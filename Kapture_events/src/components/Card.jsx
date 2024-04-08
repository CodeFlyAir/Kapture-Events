import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useGoogleLogin} from "@react-oauth/google";

const Card = ({ eventId, image, title, organiser, address, date }) => {
    const navigate = useNavigate();
    const login = useGoogleLogin({
        onSuccess: (response) => {
            localStorage.setItem("accessToken", response.access_token);
            navigate(`/events/${eventId}`,  { state: { eventId, date, title } });
        },
        onError: (err) => {
            console.error(err)
            alert("login failed");
        },
        scope: "https://www.googleapis.com/auth/userinfo.email",
        // redirect_uri: "/
    })

    const handleRegisterClick = () => {
        navigate(`/events/${eventId}`,  { state: { eventId, date, title } }); // Pass eventId as 
    }
    // const handleRegisterClick = async () => {
    //     // try {
    //     //     // Construct the authorization URL
    //     //     const clientId = '454799539348-6pprtbja4g3k32l5qu1itlf1e04iugvq.apps.googleusercontent.com';
    //     //     // const redirectUri = encodeURIComponent('https://kapture-events.onrender.com/login');
    //     //     const redirectUri = encodeURIComponent(`http://localhost:5173/oauth2/callback`)
    //     //     const authorizationUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&state=${eventId}&response_type=code&scope=email%20profile`;
    //     //
    //     //     // Redirect the user to the authorization URL
    //     //     window.location.href = authorizationUrl;
    //     //
    //     //
    //     // } catch (error) {
    //     //     console.error('Error initiating OAuth 2.0 flow:', error);
    //     //     // Handle errors gracefully, e.g., show an error message to the user
    //     // }
    //     login();
    // };

    return (
        <div className="max-w-sm overflow-hidden shadow-lg m-auto w-20vw mx-6 h-80 w-64 my-5 rounded-2xl items-center" style={{ backgroundColor: '#FFCFE9' }}>
            <img className="w-auto h-1/2" src={image} alt={title} />
            <div className="px-6 py-1">
                <div className="font-poppins font-bold text-lg mb-1 text-black">{title}</div>
                <p className="text-gray-700 text-sm">Organiser: {organiser}</p>
                <p className="text-gray-700 text-xs">{address} | {date}</p>
                <button
                    className="bg-pinky hover:bg-blue-700 text-white font-bold mb-2 mt-2 p-1 rounded w-full"
                    onClick={login}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Card;
