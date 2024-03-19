
import React from 'react';
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

const Approval = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Event 1', startDate: '2024-03-15', endDate: '2024-03-17' },
        { id: 2, title: 'Event 2', startDate: '2024-03-18', endDate: '2024-03-20' },
        { id: 3, title: 'Event 3', startDate: '2024-03-21', endDate: '2024-03-23' },
        { id: 4, title: 'Event 4', startDate: '2024-03-25', endDate: '2024-03-27' },
        { id: 5, title: 'Event 5', startDate: '2024-03-28', endDate: '2024-03-30' },
    ]);
    const [isLoading, setIsLoading] = useState(false); // Initially not loading (replace with API call)
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages

    // Function to simulate API call to update event status (replace with actual API calls)
    const handleEventAction = async (eventId, action) => {
        setIsLoading(true); // Simulate loading state
        try {
            // Replace with your actual API call and handle response
            console.log(`Event ${eventId} ${action}ed successfully!`);
            setEvents(
                events.map((event) => (event.id === eventId ? { ...event, status: action } : event))
            );
        } catch (error) {
            console.error('Error updating event status:', error);
            setErrorMessage('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (

        <div className="min-h-screen px-6 py-4 bg-slaty-900 justify-center">
            <h1 className="text-4xl items-center font-bold text-pinky">Pending Events</h1>
            {isLoading ? (
                <div className="mt-8 text-center">
                    <p>Updating event status...</p>
                </div>
            ) : errorMessage ? (
                <div className="mt-4 text-red-500 font-medium">{errorMessage}</div>
            ) : (
                <div className="mt-4">
                    <table className="w-full shadow rounded overflow-hidden">
                        <thead>
                        <tr className="bg-gray-500 text-left text-xs font-semibold text-white">
                            <th className="px-6 py-3  ">Title</th>
                            <th className="px-6 py-3">Start Date</th>
                            <th className="px-6 py-3">End Date</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {events.map((event) => (
                            <tr key={event.id} className="hover:bg-amber-600">
                                <td className="px-6 py-4 text-white">{event.title}</td>
                                <td className="px-6 py-4 text-white">{event.startDate}</td>
                                <td className="px-6 py-4 text-white">{event.endDate}</td>
                                <td className="px-6 py-4 flex space-x-2">
                                    <button
                                        className="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                        onClick={() => handleEventAction(event.id, 'accept')}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        onClick={() => handleEventAction(event.id,'reject')}
                                    >Reject
                                    </button>
                                    <button
                                        className="px-2 py-1 text-xs font-medium text-white bg-yellow-500 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                                        onClick={() => handleEventAction(event.id, 'hold')}
                                    >
                                        On Hold
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            )}
        </div>

    );
};
function AdminApproval (){
    return (
        <>

            <App/>
           <Approval/>
            <Footer/>

        </>
    )
}

export default AdminApproval