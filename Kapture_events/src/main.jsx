import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'

import Home_page from './page/home_page/Home_page.jsx'
import CreateEvent from "./page/event_page/CreateEvent.jsx";
import Registration_page from "./page/registration_page/Registration_page.jsx";
import Login_page from "./page/admin_page/Login_page.jsx";
import Home from "./components/Home.jsx";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Error_page from './page/error_page/Error_page.jsx'

const router = createBrowserRouter(
   createRoutesFromElements(
       <Route path='/' element={<Layout/>}>
          <Route path='events' element= {<Home/>} >

           </Route>
           <Route path ='events/:id' element = {<CreateEvent/>}/>

        </Route>
   )
)


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router = {router} />

  </React.StrictMode>,
)
