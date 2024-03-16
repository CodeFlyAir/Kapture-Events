import axios from "axios";
import { useEffect } from "react";



const  body{
  name:name
}

useEffect(() => {
  axios.post('https://api.kapture.com/events',body)
  .then((response) => {
    setSlides[response.data];
  })
  .catch((error) => {
    console.log(error);
  });
}, []);

 useEffect(() => {
    axios.get('https://api.kapture.com/events')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
{
  data.map((event,index) => (

    return (
      <div key={event.id} className="card">
        {event.title}
      </div>
    );
  ));
    }
 
 
 
 
 events = [
  {
    id: 1,
    title: 'Event 1',
    date: new Date('2024-02-10'),
    Location:   ,
  },
  {
    id: 2,
    title: 'Event 2',
    date: new Date('2024-02-11'),
    Location: false,
  },
  {
    id: 3,
    title: 'Event 3',
    date: new Date('2024-02-12'),
    Location: true,
  },
  {
    id: 4,
    title: 'Event 4',
    date: new Date('2024-02-13'),
    Location: false,
  },
  {
    id: 5,
    title: 'Event 5',
    date: new Date('2024-02-14'),
    Location: true,
  },
  {
    id: 6,
    title: 'Event 6',
    date: new Date('2024-02-15'),
    Location: false,
  },
  {
    id: 7,
    title: 'Event 7',
    date: new Date('2024-02-16'),
    Location: true,
  },
  {
    id: 8,
    title: 'Event 8',
    date: new Date('2024-02-17'),
    Location: false,
  },
  {
    id: 9,
    title: 'Event 9',
    date: new Date('2024-02-18'),
    Location: true,
  },
  {
    id: 10,
    title: 'Event 10',
    date: new Date('2024-02-19'),
    Location: false,
  },
];

    {
      "event_name": "Summer Music Festival",
      "organizer_name": "XYZ Events",
      "date": "2024-06-15",
      "location": "City Park",
      "image": "https://placekitten.com/800/400"  
    },
    {
      "event_name": "Tech Conference",
      "organizer_name": "TechHub",
      "date": "2024-07-05",
      "location": "Tech Center",
      "image": "https://placekitten.com/800/401"
    },
    {
      "event_name": "Art Exhibition",
      "organizer_name": "Creative Arts Society",
      "date": "2024-08-20",
      "location": "Art Gallery",
      "image": "https://placekitten.com/800/402"
    },
    {
      "event_name": "Food Festival",
      "organizer_name": "TasteMasters",
      "date": "2024-09-10",
      "location": "Downtown Square",
      "image": "https://placekitten.com/800/403"
    },
    {
      "event_name": "Fitness Challenge",
      "organizer_name": "FitLife",
      "date": "2024-10-02",
      "location": "Local Gym",
      "image": "https://placekitten.com/800/404"
    },
    {
      "event_name": "Science Fair",
      "organizer_name": "Science Society",
      "date": "2024-11-15",
      "location": "Science Center",
      "image": "https://placekitten.com/800/405"
    },
    {
      "event_name": "Book Club Meeting",
      "organizer_name": "Bookworms Club",
      "date": "2024-12-08",
      "location": "Public Library",
      "image": "https://placekitten.com/800/406"
    },
    {
      "event_name": "Holiday Market",
      "organizer_name": "Local Merchants Association",
      "date": "2025-01-05",
      "location": "Main Street",
      "image": "https://placekitten.com/800/407"
    },
    {
      "event_name": "Charity Run",
      "organizer_name": "Hope Foundation",
      "date": "2025-02-20",
      "location": "City Park",
      "image": "https://placekitten.com/800/408"
    },
    {
      "event_name": "Film Festival",
      "organizer_name": "Cinephile Society",
      "date": "2025-03-12",
      "location": "Cinema Hall",
      "image": "https://placekitten.com/800/409"
    }
    {
      /*import React, { useState } from 'react';

const FilterComponent = () => {
  const [isPastActive, setIsPastActive] = useState(false);
  const [isUpcomingActive, setIsUpcomingActive] = useState(false);
  const [isMyActive, setIsMyActive] = useState(false);
  const [subFilter, setSubFilter] = useState('');

  const handlePastClick = () => {
    setIsPastActive(!isPastActive);
    setIsUpcomingActive(false);
    setIsMyActive(false);
    setSubFilter('');
  };

  const handleUpcomingClick = () => {
    setIsUpcomingActive(!isUpcomingActive);
    setIsPastActive(false);
    setIsMyActive(false);
    setSubFilter('');
  };

  const handleMyClick = () => {
    setIsMyActive(!isMyActive);
    setIsPastActive(false);
    setIsUpcomingActive(false);
    setSubFilter('');
  };

  const handleSubFilterClick = (selectedSubFilter) => {
    setSubFilter(selectedSubFilter);
  };

  const generateCards = () => {
    // Mock data for demonstration purposes
    const events = [
      { id: 1, title: 'Event 1' },
      { id: 2, title: 'Event 2' },
      // ... more events
    ];

    // Apply main filter
    let filteredEvents = [];
    /*if (isPastActive) {
      filteredEvents = events.filter((event) => /* your past events filter logic/);
    } else if (isUpcomingActive) {
      // Apply sub-filter if Upcoming Events is active
      if (subFilter === 'today') {
        filteredEvents = events.filter((event) => /* your today filter logic );
      } else if (subFilter === 'tomorrow') {
        filteredEvents = events.filter((event) => /* your tomorrow filter logic );
      } else if (subFilter === 'thisMonth') {
        filteredEvents = events.filter((event) => /* your thisMonth filter logic );
      } else {
        // Default to all upcoming events if no sub-filter is selected
        filteredEvents = events.filter((event) => /* your default upcoming events filter logic );
      }
    } else if (isMyActive) {
      filteredEvents = events.filter((event) => /* your my events filter logic );
    }
    */
    // Implement pagination logic if needed

    // Mock card rendering for demonstration purposes
    return filteredEvents.map((event) => (
      <div key={event.id} className="card">
        {event.title}
      </div>
    ));
  };

  return (
    <div className="m-8 flex flex-col md:flex-row justify-around items-center font-normal md:font-semi text-xl text-nowrap">
      <div
        className={`cursor-pointer inline-flex items-center text-${isPastActive ? '#FF00A2' : 'white'} text-white px-3 py-1 rounded-full`}
        onClick={handlePastClick}
      >
        <span className="mr-1">Past Events</span>
      </div>

      <div
        className={`cursor-pointer inline-flex items-center text-${isUpcomingActive ? '#FF00A2' : 'white'} text-white px-3 py-1 rounded-full`}
        onClick={handleUpcomingClick}
      >
        <span className="mr-1">Upcoming Events</span>
      </div>

      <div
        className={`cursor-pointer inline-flex items-center text-${isMyActive ? '#FF00A2' : 'white'} text-white px-3 py-1 rounded-full`}
        onClick={handleMyClick}
      >
        <span className="mr-1">My Registration</span>
      </div>

      {isUpcomingActive && (
        <div className="sub-filters flex mt-2">
          <div
            className={`cursor-pointer inline-flex items-center text-${subFilter === 'today' ? '#FF00A2' : 'white'} text-white px-3 py-1 rounded-full`}
            onClick={() => handleSubFilterClick('today')}
          >
            <span className="mr-1">Today</span>
          </div>

          <div
            className={`cursor-pointer inline-flex items-center text-${subFilter === 'tomorrow' ? '#FF00A2' : 'white'} text-white px-3 py-1 rounded-full`}
            onClick={() => handleSubFilterClick('tomorrow')}
          >
            <span className="mr-1">Tomorrow</span>
          </div>

          <div
            className={`cursor-pointer inline-flex items-center text-${subFilter === 'thisMonth' ? '#FF00A2' : 'white'} text-white px-3 py-1 rounded-full`}
            onClick={() => handleSubFilterClick('thisMonth')}
          >
            <span className="mr-1">This Month</span>
          </div>
        </div>
      )}

      <div className="cards flex flex-wrap mt-4">{generateCards()}</div>
    </div>
  );
};

export default FilterComponent;














/*import React, { useState } from 'react';

const FilterComponent = () => {
  // Use three separate state variables for each filter
  const [isPastActive, setIsPastActive] = useState(false);
  const [isUpcomingActive, setIsUpcomingActive] = useState(false);
  const [isMyActive, setIsMyActive] = useState(false);

  // Define three different functions for each filter
  const handlePastClick = () => {
    // Toggle the past filter state and set the other two to false
    setIsPastActive(!isPastActive);
    setIsUpcomingActive(false);
    setIsMyActive(false);
  };

  const handleUpcomingClick = () => {
    // Toggle the upcoming filter state and set the other two to false
    setIsUpcomingActive(!isUpcomingActive);
    setIsPastActive(false);
    setIsMyActive(false);
  };

  const handleMyClick = () => {
    // Toggle the my filter state and set the other two to false
    setIsMyActive(!isMyActive);
    setIsPastActive(false);
    setIsUpcomingActive(false);
  };

  return (
    <div className='m-8 flex justify-around items-center font-normal md:font-semi text-xl text-nowrap'>
      <div
        className={`cursor-pointer inline-flex items-center text-${
          isPastActive ? '[[#FF00A2]]' : 'white'
        } text-white px-3 py-1 rounded-full`}
        onClick={handlePastClick}
      >
        <span className='mr-1'>Past Events</span>
      </div>

      <div
       className={`cursor-pointer inline-flex items-center text-${
        isUpcomingActive ? '[[#FF00A2]]' : 'white'
      } text-white px-3 py-1 rounded-full`}
        onClick={handleUpcomingClick}
      >
        <span className='mr-1'>Upcoming Events</span>
      </div>

      <div
        className={`cursor-pointer inline-flex items-center text-${
          isMyActive ? '[[#FF00A2]]' : 'white'
        } text-white px-3 py-1 rounded-full`}
        onClick={handleMyClick}
      >
        <span className='mr-1'>My Registration</span>
      </div>
    </div>
  );
};

export default FilterComponent;
*/
    
  ]
  