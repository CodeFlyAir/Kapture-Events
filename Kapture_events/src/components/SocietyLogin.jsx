import React from 'react';
import {useState} from "react";
import axios from 'axios';

import App from './header.jsx';
import Footer from './footer.jsx';
import RegisterSociety from './RegisterSociety.jsx';
import {useNavigate} from "react-router-dom";

const SocietyLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [societyName, setSocietyName] = useState(''); // Add state for societyName
    const [contact, setContact] = useState(''); // Add state for contact

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
//             const secretKey = "89cd4d36a76c216e1f5816b12b3db1349fd511bcc6094d21593008bbcb997c00"; // Secret key for AES encryption
//             const encryptedPassword = CryptoJS.AES.encrypt(
//               password,
//               CryptoJS.enc.Utf8.parse(secretKey),
//               {
//                 mode: CryptoJS.mode.ECB,
//                 padding: CryptoJS.pad.Pkcs7,
//               }
//             ).toString();

//             const response = await axios.get(`https://kapture-events.onrender.com/society/login?email-id=${email}&password=${encodeURIComponent(encryptedPassword)}`);
            const password="test";

            const response = await axios.get(`https://kapture-events.onrender.com/society/login?email-id=${email}&password=${password}`);


//             console.log("Encrypted password:", encryptedPassword);
            console.log(response);


            if (response) {
                console.log('Login successful:', response.data);
                if(response.data){
                    window.location.href = '/org_home';
                }

            } else {
                console.log("Login failed : ", response.data);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     console.log("Before post");
        //     const response = await axios.post('http://localhost:8080/society/register', {
        //         societyName: "PetX",
        //         contact: 8193647134,
        //         emailId: "petx@gmail.com",
        //         password: "test"
        //     });

        //     console.log('Registration successful:', response.data);
        // } catch (error) {
        //     console.error('Error during registration:', error);
        // }
    };

    const handleRequestPass = () => {
        setShowRegistrationForm(true);
    };

    return (
        <>
           
            <div className="min-h-screen bg-slaty flex flex-col justify-center py-15 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="text-center">
                        <h2 className="mt-9 text-3xl font-extrabold text-bg_pink">Welcome Back !</h2>
                        <p className="mt-6 text-sm text-white">
                            Please enter your email and password to log in.
                        </p>
                    </div>
                    <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handleLogin}>
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
                            Don't have an account?{' '}
                            <button className="font-medium text-blue-600 hover:text-blue-500" onClick={handleSubmit}>
                                Request For Society Pass
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SocietyLogin;
