
import  React from 'react';
import {useState} from "react";
import ReactDOM from 'react-dom';
import App from './header.jsx';
import './indexx.css'
import Footer from './footer.jsx';
import ImageSlider from "./Carousel.jsx";
import Filter_ from "./Filter_.jsx";
import Pict from "./pict.jsx";
import FooterCreateEvent from "./FooterCreateEvent.jsx";
import Gallerym from "./Gallerym.jsx";
import subevent from "arg";
import img from "./Rectangle 3.png";
import bcrypt from 'bcryptjs'; // Import bcryptjs library for password hashing
import axios from 'axios';


const RegisterSociety = () => {
    const [societyName, setSocietyName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const y = 'in main'
        console.log(y);

        try {
            // Send registration data to the backend
            const response = axios.post('https://kapture-events.onrender.com/society/register', {
                societyName: "NSS",
                contact: 1533642413,
                emailId: "nss@gmail.com",
                password: bcrypt.hashSync("test", 10)
            });
            console.log(y);

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
                        <h2 className="mt-9 text-3xl font-extrabold text-bg_pink">Welcome Back !</h2>
                        <p className="mt-6 text-sm text-white">
                            Please enter your email and password to log in.
                        </p>
                    </div>
                    <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
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
                                    Log in
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-center">
                            Dont have an account?{' '}
                            <button to="/register" className="font-medium text-blue-600 hover:text-blue-500" onClick={handleSubmit}>
                                Request For Society Pass
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default RegisterSociety
































