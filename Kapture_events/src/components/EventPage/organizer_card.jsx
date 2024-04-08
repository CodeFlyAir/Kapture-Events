import React from 'react';

export default function Organizers({ picture1, name1, Job1, p_no1, gmail1 }) {
  return (
    <div className='flex justify-center items-center bg-[#323843B0] p-0 min-h-screen'>
      <figure className="flex flex-col md:flex-row rounded-xl p-8 md:p-0 my-6 w-full max-w-lg mx-auto">
        <img className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto md:mx-0 p-4" src={picture1} alt={name1} />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              {name1}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {Job1}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {p_no1}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {gmail1}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
