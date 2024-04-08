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
import subevent from "arg";
 import './event.css';
import TimePicker from 'react-time-picker';
import DatePicker  from "react-date-picker";
import img from './Rectangle 3.png';
import axios from 'axios';






function CreateEventForm() {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [registrationFee, setRegistrationFee] = useState('');
    const [organiserName,setOrganiserName] =useState('');
    const [organizerContact, setOrganizerContact] = useState('');

    const [subEvents, setSubEvents,setSubEventName,setSubEventDescription,setVenuePreference1, setVenuePreference2,setVenuePreference3] = useState([{ flag:'',name: '', description: '' , date: null, time: '', venuePreference1: '' ,venuePreference2:'',venuePreference3:''}]);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case 'eventName':
                setEventName(value);
                break;
            case 'eventDescription':
                setEventDescription(value);
                break;
            case 'registrationFee':
                setRegistrationFee(value);
                break;

            case 'organiserName':
                setOrganiserName(value);
                break;
            case 'organizerContact':
                setOrganizerContact(value);
                break;
            case 'subEventName':
                setSubEventName(value);
                break;
            case 'subEventDescription':
                setSubEventDescription(value);
                break;
            case 'venuePreference1':
                setVenuePreference1(value);
                break;
            case 'venuePreference2':
                setVenuePreference2(value);
                break;
            case 'venuePreference3':
                setVenuePreference3(value);
                break;
            default:
                break;
        }
    }

    const handleInputChange2 = (event, index) => {
        const { name, value } = event.target;
        const updatedSubEvents = [...subEvents];
        updatedSubEvents[index][name] = value;
        setSubEvents(updatedSubEvents);
    };

    const handleDateChange = (date, index) => {
        const updatedSubEvents = [...subEvents];
        updatedSubEvents[index].date = date;
        setSubEvents(updatedSubEvents);
    };

    const handleTimeChange = (time, index) => {
        const updatedSubEvents = [...subEvents];
        updatedSubEvents[index].time = time;
        setSubEvents(updatedSubEvents);
    };
    const handleAddSubevent = () => {
        const newFlag=subEvents.length+1;
        setSubEvents([...subEvents, { flag:newFlag,name: '', description: '' , date: '', time: '', venuePreference1: '',venuePreference2: '',venuePreference3: ''}]);
    };
    const [prevPhotos, setPrevPhotos] = useState([]);
    const handlePrevPhotosUpload = (e) => {
        const files = e.target.files;
        const updatedPrevPhotos = [...prevPhotos];
        for (let i = 0; i < files.length; i++) {
            updatedPrevPhotos.push(files[i]);
        }
        setPrevPhotos(updatedPrevPhotos);
    };
    return (

    <form>

        <div style={{display: 'flex', flexDirection: 'row',}} >
            <div style={{
                marginRight: '30px',
                marginLeft: '30px',
                padding: '10px',
                height: '83px',
                width: '559px',
                top: '806px',
                left: '40px'
            }} className="m-auto">

                <input type="text" id="eventName" className='text-white text-lg' placeholder={"Event Name"} name="eventName" value={eventName}
                       onChange={handleInputChange} style={{
                    border: '3px solid #F7418F',
                    borderRadius: '5px',backgroundColor:'inherit',height:'83px',width:'559px',top:'806px',left:'40px'}}/>
                </div>
                <div style={{ padding: '10px'}}>

                    <input type="text" id="organiserName" className='text-white text-lg' placeholder={"Organiser Name"} name="organiserName" value={organiserName}
                           onChange={handleInputChange} style={{border: '3px solid #F7418F', borderRadius: '5px',backgroundColor:'inherit',height:'83px',width:'559px',top:'806px',left:'40px'}}/>
                </div>
            </div>
            <div style={{marginTop: '20px',  padding: '10px',marginRight: '30px',marginLeft:'30px'}}>

                <textarea id="eventDescription" className='text-white text-lg' placeholder={"Event Description (up to 250 words)"} name="eventDescription" value={eventDescription}
                          onChange={handleInputChange} rows="10" cols="50" style={{border: '3px solid #F7418F', borderRadius: '5px',backgroundColor:'inherit',height:'160px',width:'1200px',top:'806px',left:'40px'}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{marginRight: '30px', padding: '10px',marginLeft:'30px'}}>

                    <input type="Number" className='text-white text-lg' id="registrationFee" placeholder={"Registration Fees(Rs)"} name="registrationFee" value={registrationFee} onChange={handleInputChange} style={{border: '3px solid #F7418F', borderRadius: '3px',backgroundColor:'inherit',height:'70px',width:'559px',top:'1367px',left:'40px'}}/>
                </div>
                <div style={{ padding: '10px'}}>

                    <input type="text" id="organizerContact" className='text-white text-lg' placeholder={"OrganizerContactNo:"} name="organizerContact" value={organizerContact}
                           onChange={handleInputChange} style={{border: '3px solid #F7418F', borderRadius: '5px',backgroundColor:'inherit',height:'70px',width:'559px',top:'1367px',left:'40px'}}/>
                </div>
            </div>
            {/* Rectangular blocks for subevents */}
            {subEvents.map((subEvent, index) => (


                <div className={"main"}>
                <div className={'placard'} key={index}>
                    <div className={"row1"} >
                    <p className={'placHeader'}> Subevent {subEvent.flag}</p>

                    <input
                    
                        className={'subEvNamInp'}
                        type="text"
                        id={`subEventName-${index}`}
                        name={`name`}
                        placeholder={"Subevent Name"}
                        value={subEvent.name}
                        onChange={(event) => handleInputChange2(event, index)}
                    />

                </div>
                   <div className={"row2"}>

                    <input
                        type="text"

                        className={'subEvDescInp'}
                        id={`subEventDescription-${index}`}
                        name={`description`}
                        placeholder={"Subevent Description"}
                        value={subEvent.description}
                        onChange={(event) => handleInputChange2(event, index)}
                    />
                   </div>
                    <div className={"row3"}>
                        <label htmlFor={`subEventDate-${index}`}>Date:</label>
                        <input
                            type="date"
                            className='DateInput'
                            id={`subEventDate-${index}`}
                            name={`subEventDate-${index}`}
                            value={subEvent.date}
                            onChange={(event) => handleInputChange2(event, index)}
                            // style={{
                            //     border: '3px solid #F7418F',
                            //     backgroundColor: 'inherit',
                            //     height: '40px',
                            //     borderRadius: '10px',
                            //     marginLeft: '10px',
                            // }}
                        />
                        {/* Add time picker */}
                        <label htmlFor={`subEventTime-${index}`}>Time:</label>
                        <input
                            type="time"
                            className='TimeInput'
                            id={`subEventTime-${index}`}
                            name={`subEventTime-${index}`}
                            value={subEvent.time}
                            onChange={(event) => handleInputChange2(event, index)}
                            // style={{
                            //     border: '3px solid #F7418F',
                            //     backgroundColor: 'inherit',
                            //     height: '40px',
                            //     borderRadius: '10px',
                            //     marginLeft: '10px',
                            // }}
                        />
                    </div>
                    <div className={"row4"}>
                        {/* Add venue preference dropdown */}

                        <select
                            className={'prefSel1'}
                            id={`subEventVenuePreference-${index}`}
                            name={`subEventVenuePreference-${index}`}
                            value={subEvent.venuePreference}
                            onChange={(event) => handleInputChange2('venuePreference', event.target.value, index)}
                        >
                            <option value="">Select Venue Preference</option>
                            <option value="Venue 1">Venue 1</option>
                            <option value="Venue 2">Venue 2</option>
                            <option value="Venue 3">Venue 3</option>
                        </select>

                        <select
                            className={'prefSel1'}
                            id={`subEventVenuePreference-${index}`}
                            name={`subEventVenuePreference-${index}`}
                            value={subEvent.venuePreference}
                            onChange={(event) => handleInputChange2('venuePreference', event.target.value, index)}
                        >
                            <option value="">Select Venue Preference</option>
                            <option value="Venue 1">Venue 1</option>
                            <option value="Venue 2">Venue 2</option>
                            <option value="Venue 3">Venue 3</option>
                        </select>

                        <select
                            className={'prefSel1'}
                            id={`subEventVenuePreference-${index}`}
                            name={`subEventVenuePreference-${index}`}
                            value={subEvent.venuePreference}
                            onChange={(event) => handleInputChange2('venuePreference', event.target.value, index)}
                        >
                            <option value="">Select Venue Preference</option>
                            <option value="Venue 1">Venue 1</option>
                            <option value="Venue 2">Venue 2</option>
                            <option value="Venue 3">Venue 3</option>
                        </select>
                    </div>

                    {/* ... Other fields ... */}
                </div>
                </div>



            ))}

        {/* Add Subevent button */}
        <center>
        <div className="m-auto text-pinky ml-28">
        <button type="button" onClick={handleAddSubevent} className="text-3xl font-bold m-auto">

            Add Subevent

        </button>
        </div>
        </center>
        {/* Add other textboxes for remaining fields */}
    </form>
    );
}

const createEventHeaderStyle = {
    fontSize: '36px', // Adjust the font size as needed
    fontWeight: 'bold',
    color:'white',
    margin: '20px 0', // Adjust the margin as needed
};
// const coverPictureStyle = {
//     position: 'absolute',
//     top: '10px',
//     right: '10px',
//     cursor: 'pointer',
// };



function Event() {
  const [selectedImage, setSelectedImage] = useState(img);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFileName(file.name); // Set the file name to the state
      setSelectedImage(URL.createObjectURL(file)); // Create a URL for the file
    }
  };

 

  


  const  HandleSubmit = async (event) => {

    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Assuming you have already defined Time, dt, and other variables like description, Venue, etc.
  
    // Create a dt object with the dt and time combined
    // const dtTimeString = `${dt}T${Time}:00.000Z`;
    // const eventdtTime = new Date(dtTimeString);
  
    // Convert the dt object to a timestamp string
    // const formattedTime = eventdtTime.toISOString();
  
    // Construct the JSON data object
    const jsonData = {
    
        name:"Jazzzz Night",
        startDate: "2024-04-10",
        endDate: "2024-06-03",
        description : "Sample event description",
        subEvent: [
            {
                subEventId: "1",
                name: "Sub Event 1",
                description: "Description for Sub Event 1",
                date: "2024-04-10",
                time: "2024-04-10T10:00:00.000Z",
                venue: "Sub Event Venue 1"
            },
            {
                subEventId: "2",
                name: "Sub Event 2",
                description: "Description for Sub Event 2",
                date: "2024-04-10",
                time: "2024-04-10T14:00:00.000Z",
                venue: "Sub Event Venue 2"
            }
        ],
        eventStatus: [

    ]
        
    };
  
  
    // Create a FormData object and append JSON data
    const formData2 = new FormData();
    formData2.append('jsonData', new Blob([JSON.stringify(jsonData)], { type: 'application/json'}));
  
    // Fetch the image and append it to formData
    const response = await fetch(selectedImage);
    const fileData = await response.blob();
    formData2.append('thumbnail', fileData);
    
  
    // Set the headers for the request
    const config = {
      headers: {
        // 'Content-Type': 'multipart/form-data'
      }
    };
  
    try {
      // Make the POST request using axios
      const response = await axios.post(`https://kapture-events.onrender.com/events/register?email-id=nss@gmail.com`, formData2, config)

      .then(response => {
        console.log(response.data);
        alert(' submitted successfully!');
        window.location.href = '/org_home';
    })
      
    
      // Handle the response accordingly
    } catch (error) {
      console.error('Error submitting form:', error);
    }
   
  };


  return (
    <>
      <div className='aspect-ratio:4/3 ml-8 mr-8'>
        {/* Use the object URL as the image source */}
        {selectedImage && (
          <img
            style={{ height: '90vh', width: '100%', objectFit: 'cover', objectPosition: 'center', marginTop: '0px' }}
            className='rounded-[45px] z-0'
            src={selectedImage}
            alt="Cover"
          />
        )}
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <button className='my-3 w-48 rounded-xl h-auto bg-pinky text-white' onClick={() => document.getElementById('image-upload').click()}>
              Upload Image
            </button>
          </label>
          {selectedFileName && <p className='text-pinky'>File: {selectedFileName}</p>}
        </div>
      </div>
      <div className="event-container justify-between flex flex-row flex-wrap">
        {/* Your other content */}
        <h1 className="items-center text-3xl text-white mt-4 mb-6 font-bold">Create New Event</h1>
        <h1 className="flex flex-row-reverse text-pinky mr-10 mt-4 text-2xl">Preview</h1>
        <CreateEventForm />
      </div>
      <div className="flex flex-row justify-items-center">
        <button
          className="p-4 bg-pinky text-white flex-row-reverse justify-items-end m-auto mt-4 rounded-2xl w-1/6"
          onClick={HandleSubmit}
        >
          Submit Request
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Event;
