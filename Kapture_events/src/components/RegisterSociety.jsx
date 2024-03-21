import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs'; // Import bcryptjs library for password hashing
import App from './header.jsx';
import Footer from './footer.jsx';

const RegisterSociety = () => {
    const [societyName, setSocietyName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        log.console("In register");
        try {
            // Hash the password using bcrypt before sending it to the API
            const hashedPassword = bcrypt.hashSync(password, 10);

            // Send registration data to the backend
            const response = await axios.post('https://kapture-events.onrender.com/society/register', {
                societyName: societyName,
                contact: contact,
                emailId: email,
                password: hashedPassword
            });

            // Handle response from the API
            console.log('Registration successful:', response.data);
            // You can perform additional actions after successful registration, such as redirecting to a login page
        } catch (error) {
            console.error('Error during registration:', error);
            // Handle error
        }
    };

    return (
        <>
            <App/>
            <div className="min-h-screen bg-slaty flex flex-col justify-center py-15 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="text-center">
                        <h2 className="mt-9 text-3xl font-extrabold text-bg_pink">Register Your Society</h2>
                        <p className="mt-6 text-sm text-white">
                            Please enter your details to register your society.
                        </p>
                    </div>
                    <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="societyName" className="block text-sm font-medium text-gray-700">
                                    Society Name
                                </label>
                                <input
                                    type="text"
                                    id="societyName"
                                    name="societyName"
                                    required
                                    value={societyName}
                                    onChange={(e) => setSocietyName(e.target.value)}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                                    Contact
                                </label>
                                <input
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    required
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    autoComplete="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default RegisterSociety;
