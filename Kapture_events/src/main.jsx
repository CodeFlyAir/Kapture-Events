import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './layout.jsx';


import CreateEvent from "./page/event_page/CreateEvent.jsx";
import Registration_page from "./page/registration_page/Registration_page.jsx";
import Login_page from "./page/admin_page/Login_page.jsx";
import Home from "./components/Home.jsx";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Error_page from './page/error_page/Error_page.jsx'
import Org_page from './page/org_dash-3/Org_dash-3.jsx'
import DropDown from './components/Organiser/EventPage/dropdown.jsx'
import EventStatus from './components/Organiser/EventPage/Eventstatus.jsx'
import MediaCenter from "./components/Organiser/EventPage/MediaCenter.jsx"
import Org_home from './page/org_homepage/org_homepage.jsx'
import Filternew_ from './components/org_filter.jsx';
import OrgEvent from './page/OrganiserEvent_page/OrganiserEvent.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     
      <Route path='events' element={<Home />} />
      <Route path="events/:eventId" element={<CreateEvent />} />
      <Route path="registration/:eventId" element={<Registration_page />} />
      <Route path="login" element={<Login_page />} />
      <Route path="*" element={<Error_page />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
       
    </React.StrictMode>
);



// ReactDOM.createRoot(document.getElementById('root')).render(

//  <React.StrictMode>  
//    < Org_page/>
//  </React.StrictMode>,
// )


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>  
//     <MediaCenter/>
//   </React.StrictMode>,
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//
//   <React.StrictMode>
//     < DropDown/>
//   </React.StrictMode>,
//  )