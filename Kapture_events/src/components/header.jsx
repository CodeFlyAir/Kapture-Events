import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import EventLogo from '../assets/Event.svg'
import SearchLogo from "../assets/Search.svg";
import profileLogo from '../assets/profile.svg'



function App() {
   const Handleclick = () => {
    window.location.href = '/events';
  }
  
  return (
    <>
      <nav>
         <div className='  w-full h-auto bg-gradient-to-b from-bg_pink from-10% to-slaty to-70% ... p-1 mb-0 flex flex-row flex-wrap justify-between '
         >
           <div className=" flex flex-row p-4 pb-0 pt-[2px] pl-41px">
            <img className="bg-transparent h-20 md:h-24" onClick={Handleclick} src={EventLogo} alt="Logo"/>

           </div>
           <div className='  my-2  item-center flex flex-end justify-center pt-2 pr-5'>
            <div className='flexflex-row px-8  '>
            <input
          className=' rounded-xl p-2 pl-8 w-64 bg-[#f0d7ff] font-poppins font-normal text-sm placeholder:text-gray-500 placeholder-opacity-50 border-0'
          placeholder='Search Event...'
          style={{
          
            backgroundImage: `url(${SearchLogo})`,
            backgroundSize: '20px 20px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '8px center',
          }}
        />
            </div>

           <img className="h-10 "src={profileLogo} alt="Logo"/>
           
          
           </div>
         </div>
      </nav>
    </>
  )
} 

export default App
