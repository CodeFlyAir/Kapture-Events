import  React, { useEffect } from 'react';
import { useLocation, useNavigate ,useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const OAuthCallback = () => {
    const { eventId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const code = params.get('code');

        if (code) {
            // Send a POST request to exchange the authorization code for an access token
            axios.post('https://oauth2.googleapis.com/token', {
                code: code,
                redirect_uri: 'https://kapture-events.onrender.com/login',
                client_id: '454799539348-6pprtbja4g3k32l5qu1itlf1e04iugvq.apps.googleusercontent.com',
                client_secret: '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',
                grant_type: 'authorization_code'
            })
                .then(response => {
                    // Extract the access token from the response
                    const accessToken = response.data.access_token;

                    // Now you can use the access token to make authenticated requests
                    // For example, you can store the access token in localStorage or session storage

                    // After obtaining the access token, you can redirect to the events page
                    localStorage.setItem('accessToken', accessToken);
                   navigate(`/registration/${eventId}`);
                })
                .catch(error => {
                    console.error('Error exchanging authorization code for access token:', error);
                });
        }
    }, [location.search, navigate]);

    return null; // This component doesn't render anything
};

export default OAuthCallback;