import React, {useEffect} from 'react';

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
import {useNavigate} from "react-router-dom";
import {useGoogleLogin} from "@react-oauth/google";


const Login_Admin = (eventId,date,title) => {
    const navigate = useNavigate();
    const login1 = useGoogleLogin({
        onSuccess: (response) => {
            localStorage.setItem("accessToken", response.access_token);
            window.location.href='/Approval'
        },
        onError: (err) => {
            console.error(err)
            alert("login failed");
        },
        scope: "https://www.googleapis.com/auth/userinfo.email",
        // redirect_uri: "/
    })



    const handleLogin = async () => {
        // window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email%20profile`;
        // const [email] = useState('');

        window.location.href='/Approval'
    }
    return (
        <>

            <div className="min-h-screen bg-slaty flex flex-col justify-center py-15 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="text-center">
                        <h2 className="mt-9 text-3xl font-extrabold text-bg_pink">Welcome Back Admin!</h2>
                        <p className="mt-6 text-sm text-white">
                            Please enter your email to log in.
                        </p>
                    </div>
                    <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form>
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
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    onClick={login1}
                                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Log in
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


export default Login_Admin

