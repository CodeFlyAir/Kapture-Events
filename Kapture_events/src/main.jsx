import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Registration_page from "./page/registration_page/Registration_page.jsx"
import Error_page from './page/error_page/Error_page.jsx'
import Org_page from './page/org_dash-3/Org_dash-3.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    < Org_page/>
  </React.StrictMode>,
)
