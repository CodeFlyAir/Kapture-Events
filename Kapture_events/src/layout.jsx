import React from 'react'
import App from './components/header.jsx'
import footer from './components/footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout(){
 return (
  <>
      <App/>
      <Outlet/>
      <footer/>
  </>
 )
}

 export default Layout