import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useHistory and useLocation
import Poster from './EventPage/poster';

function RegistrationForm() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { eventId,date, title , description ,picture} = state || {};
   
    const [capacity, setCapacity] = useState(100);
    const [formData, setFormData] = useState({ 
        email: "21051009@kiit.ac.in",
        roll: 1009,
        firstName: "BHHHHHH",
        lastName: "BHHHHHHHH",
        contact: 1000000000,
        gender: "M"
     
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle registration
    const handleRegistration = () => {
        setCapacity(capacity - 1);
        axios.post(`https://kapture-events.onrender.com/student/register?event-id=${eventId}`, formData)
            .then(response => {
                console.log(response.data);
                alert('Registration submitted successfully!');
                navigate(-1); // Navigate back to the previous page
                // You can reset the form data here if needed
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert('Error submitting registration. Please try again later.');
            });
    };

    return (
  <>
        <Poster picture={picture} />
        <div className="registration-form flex flex-col items-center" style={{ marginLeft: '1cm' }}>

        <div className="w-full text-left text-white mb-4" style={{ marginLeft: '0cm' }}>
            <div className="text-pinky text-2xl font-bold mt-8">KIIT Campus | {date} </div>
            <div className="text-white text-lg mt-2 font-bold">
                <u className="text-3xl">{title}</u>
            </div>
            <div className="text-white text-lg mt-2">
               {description}
            </div>
            <div className="flex justify-between items-center mt-2">
                <div className="text-pinky text-lg">Remaining Seats: {capacity}</div>
                <div className="text-white text-xl "style={{ marginRight: '1cm' }} >Registration Fee: <span className="text-white text-lg font-bold">Rs 350</span></div>
            </div>
        </div>
        <h2 className="w-full text-center text-2xl font-bold text-white mb-4">Registration Form</h2>
        <div className="grid grid-cols-2 gap-4">
            <div className="relative">
                <input type="text" name ="firstName" id="firstName" placeholder="firstName" className="input-style rounded-lg border-2 border-pinky bg-slaty p-3 w-full text-lg text-pinky" style={{ paddingRight: '8rem' }} />
                <label htmlFor="firstName" className="absolute top-0 left-0 px-2 py-1 text-sm font-medium text-gray-700 underline" ></label>
            </div>
            <div className="relative">
                <input type="text" id="lastName" placeholder="lastName" className="input-style rounded-lg border-2  border-pinky bg-slaty p-3 w-full text-lg text-pinky" style={{ paddingRight: '8rem' }} />
                <label htmlFor="lastName" className="absolute top-0 left-0 px-2 py-1 text-sm font-medium text-gray-700 underline"></label>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative">
                <input type="text" id="rollNumber" placeholder="rollNumber" className="input-style rounded-lg border-2  border-pinky bg-slaty p-3 w-full text-lg text-pinky" style={{ paddingRight: '8rem' }} />
                <label htmlFor="rollNumber" className="absolute top-0 left-0 px-2 py-1 text-sm font-medium text-gray-700 underline"></label>
            </div>
            <div className="relative">
                <input type="text" id="contactNumber" placeholder ="contactNumber" className="input-style rounded-lg border-2 border-pinky bg-slaty p-3 w-full text-lg text-pinky" style={{ paddingRight: '8rem' }} />
                <label htmlFor="contactNumber" className="absolute top-0 left-0 px-2 py-1 text-sm font-medium text-gray-700 underline"></label>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative">
                <input type="text" id="gender" placeholder="gender" className="input-style rounded-lg border-2 border-pinky bg-slaty p-3 w-full text-lg text-pinky" style={{ paddingRight: '8rem' }} />
                <label htmlFor="gender" className="absolute top-0 left-0 px-2 py-1 text-sm font-medium text-gray-700 underline"></label>
            </div>
            <div className="relative">
                <input type="text" id="yearOfGraduation" placeholder="yearOfGraduation" className="input-style rounded-lg border-2 border-pinky bg-slaty p-3 w-full text-lg text-pinky" style={{ paddingRight: '8rem' }} />
                <label htmlFor="yearOfGraduation" className="absolute top-0 left-0 px-2 py-1 text-sm font-medium text-gray-700 underline"></label>
            </div>
        </div>
        <button className="bg-pinky hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleRegistration}>Register</button>
    </div>
    </>
 );
}

export default RegistrationForm;