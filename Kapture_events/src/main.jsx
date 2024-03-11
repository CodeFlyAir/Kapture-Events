import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CreateEvent  from './page/event_page/CreateEvent.jsx'

import Registration_page from "./page/registration_page/Registration_page.jsx"
import Error_page from './page/error_page/Error_page.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
   <CreateEvent/>
  </React.StrictMode>,
)
