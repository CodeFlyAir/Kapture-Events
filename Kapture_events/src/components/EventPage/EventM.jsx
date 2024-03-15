import React from "react";
import EventPage from "./event.jsx";
import App from "../header.jsx"
import ImageSlider from "../Carousel.jsx";
import Home from "../Home.jsx";
import Footer from "../footer.jsx";
import Poster from "./poster.jsx";
import poster1 from "../../assets/poster1.svg"


let data = {
    address: "123 Main Street, Cityville",
    date: "2024-03-15",
    name: "Awesome Event",
    users: [
      { name: "John Doe", profilePicture: "https://example.com/john.jpg" },
      { name: "Jane Smith", profilePicture: "https://example.com/jane.jpg" },
    ],
    registrationFee: "$20",
    description: "Join us for an amazing event filled with fun and excitement!",
    timeline: {
      date: [
        { description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", date: "2024-03-15", time: "10:00 AM" },
        { description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", date: "2024-03-15", time: "11:00 AM" },
        { description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", date: "2024-03-15", time: "01:00 PM" },

        { description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", date: "2024-03-16", time: "02:00 PM" },
        { description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", date: "2024-03-16", time: "03:00 PM" },
        { description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", date: "2024-03-16", time: "01:00 AM" },
        
      ],
    },
    specialGuest: [
      {
        name: "Special Guest 1",
        profilePicture: "https://example.com/guest1.jpg",
        jobProfile: "Expert Speaker",
        dateOfEvent: "2024-03-16",
        timeOfEvent: "03:00 PM",
        address: "456 Special Avenue, Citytown",
      },
      {
        name: "Special Guest 2",
        profilePicture: "https://example.com/guest2.jpg",
        jobProfile: "VIP Attendee",
        dateOfEvent: "2024-03-17",
        timeOfEvent: "07:00 PM",
        address: "789 VIP Street, Elite City",
      },
    ],
    sponsor: [
      { image: "https://example.com/sponsor1.jpg" },
      { image: "https://example.com/sponsor2.jpg" },
    ],
    organizer:[
      {
      "name": "Soumya", 
      "post": "Coordinator", 
      "email": "soumya@gmail.com", 
      "image": {
      "fileUrl": "https://storage.googleapis.com/download/storage/v1/b/kapture-events/o/dd963299-e46c-434b-a56c-95663461c515_linkedin-profile-picture.jpg?generation=1708280247675321&alt=media", 
      "fileName": "dd963299-e46c-434b-a56c-95663461c515_linkedin-profile-picture.jpg"
      }, 
      "contact": 8947817471
      }
      ],
    teamFormationGuidelines: ["Follow these guidelines for successful team formation.", "Team size: 3-5 members", "Team leader must register first."],
    eventSchedule: "https://example.com/schedule.pdf",
    celebNightPoster: "https://example.com/poster.jpg",
    rulesAndRegulations: "https://example.com/rules.pdf",
    reward: "Exciting prizes await the winners!",
    eligibilityCriteria: ["Open to participants of all ages.", "Participants must register before the deadline."],
  };

  const e_poster = [
    { src: poster1 }
  ];
  
  export default function EventM() {
    return (
      <>

        <Poster image={e_poster[0].src} />
        <EventPage data={data} />
        <Footer />
      </>
    );
  }
  