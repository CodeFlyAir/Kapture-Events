import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; // Import useLocation
import axios from 'axios';
import EventPage from "./event.jsx";
import Footer from "../footer.jsx";
import Poster from "./poster.jsx";

export default function EventM(props) {
  const [slides, setSlides] = useState([]);
  const location = useLocation(); // Get location object

  useEffect(() => {
    const eventId = location.state?.eventId; // Extract eventId from location state safely
    if (eventId) {
      axios.get(`https://kapture-events.onrender.com/events/get-event?event-id=${eventId}`)
        .then((response) => {
          setSlides(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location.state]); // Update effect when location state changes

  return (
    <>
      <EventPage data={slides} /> {/* Pass slides data to EventPage */}
      <Footer />
    </>
  );
}
