import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom'; 
// Import useHistory and useLocation

function RegistrationForm() {
    const history = useHistory();
    const location = useLocation();
    const eventDetails = location.state || {};

    const [capacity, setCapacity] = useState(100);
    const [formData, setFormData] = useState({ 
        firstName: '',
        lastName: '',
        rollNumber: '',
        contactNumber: '',
        gender: '',
        yearOfGraduation: ''
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
        axios.post('/api/registration', formData)
            .then(response => {
                console.log(response.data);
                alert('Registration submitted successfully!');
                history.goBack(); // Navigate back to the previous page
                // You can reset the form data here if needed
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert('Error submitting registration. Please try again later.');
            });
    };

    return (
        <div className="registration-form flex flex-col items-center" style={{ marginLeft: '1cm' }}>
            <div className="w-full text-left text-white mb-4" style={{ marginLeft: '0cm' }}>
                <div className="text-pinky text-2xl font-bold mt-8">{eventDetails.name}</div>
                <div className="text-white text-lg mt-2 font-bold">
                    <u className="text-3xl">{eventDetails.organizerName}</u>
                </div>
                <div className="text-white text-lg mt-2">{eventDetails.description}</div>
                <div className="flex justify-between items-center mt-2">
                    <div className="text-pinky text-lg">Remaining Seats: {eventDetails.seatsAvailable}</div>
                    <div className="text-white text-xl" style={{ marginRight: '1cm' }}>Registration Fee: <span className="text-white text-lg font-bold">Rs {eventDetails.fee}</span></div>
                </div>
            </div>
            <h2 className="w-full text-center text-2xl font-bold text-white mb-4">Registration Form</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" className="input-style rounded-lg border-2 border-pinky bg-slaty p-3 w-full text-lg text-pinky" style={{ paddingRight: '8rem' }} onChange={handleInputChange} />
                    <label htmlFor="firstName" className="absolute top-0 left-0 px-2 py-1 text-sm font-medium text-gray-700 underline">First Name</label>
                </div>
                <div className="relative">
                    <input type="text" id="lastName" placeholder="Last Name" className="input-style rounded-lg border-2 border-pinky bg-slaty p-3 w-full text-lg text-pinky" style={{ paddingRight: '8rem' }} onChange={handleInputChange} />
                    <label htmlFor="lastName" className="absolute top-0 left-0 px-2 py-1 text-sm font-medium text-gray-700 underline">Last Name</label>
                </div>
            </div>
            {/* Other input fields and button */}
            <button className="bg-pinky hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleRegistration}>Register</button>
        </div>
    );
}

export default RegistrationForm;
