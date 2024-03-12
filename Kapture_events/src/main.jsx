import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home_page from './page/home_page/Home_page.jsx'
import CreateEvent from "./page/event_page/CreateEvent.jsx";
import Registration_page from "./page/registration_page/Registration_page.jsx";
import Login_page from "./page/admin_page/Login_page.jsx";
import Home from "./components/Home.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Login_page/>
  </React.StrictMode>,
)
