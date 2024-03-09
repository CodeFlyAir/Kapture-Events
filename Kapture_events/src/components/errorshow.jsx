import React from 'react';
import sadface from '../assets/sadface.svg';

const ErrorShow = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src={sadface} alt="Sad Face" />
            <p className="text-white text-lg mt-4">Whoa there, party crasher! This backstage is for organizers only</p>
            <button className="bg-pinky text-white rounded-full px-4 py-2 mt-4">Request Organizer’s Pass</button>
        </div>
    );
};

export default ErrorShow;
