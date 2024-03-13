import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home_page from './page/home_page/Home_page.jsx'
import CreateEvent from "./page/event_page/CreateEvent.jsx";
import Registration_page from "./page/registration_page/Registration_page.jsx";
import Login_page from "./page/admin_page/Login_page.jsx";
import Home from "./components/Home.jsx";


import Registration_page from "./page/registration_page/Registration_page.jsx"
import Error_page from './page/error_page/Error_page.jsx'
import Org_page from './page/org_dash-3/Org_dash-3.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>  
    < Org_page/>
  </React.StrictMode>,
)
