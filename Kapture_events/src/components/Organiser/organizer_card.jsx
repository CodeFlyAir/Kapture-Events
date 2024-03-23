
import React from 'react'
import SpecialGox from '../../assets/special_guest.jpg'

export default function Organizers({picture1 ='',name1,Job1,p_no1,gmail1}) {

    return (
<div className='flex flex-row bg-[#323843B0] mx-auto  p-0 h-auto'>
    <figure class="md:flex  rounded-xl p-8 md:p-0  my-6 w-1/2 mx-24 h-1/2 ">
      <img class="w-24 h-24 md:w-48 md:h-auto  rounded-full mx-auto p-4" src={picture1}  alt="" width="384" height="512"/>
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            {name1}
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">
            {Job1}  
          </div>
          <div class="text-slate-700 dark:text-slate-500">
           {p_no1}
          </div>
          <div class="text-slate-700 dark:text-slate-500">
           {gmail1}
          </div>
        </figcaption>
      </div>
    </figure>


   

    
   
    </div>
    )}