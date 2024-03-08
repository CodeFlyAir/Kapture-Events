import React from 'react';
import f_img from '../assets/footer.svg';

function FooterCreateEvent() {
  return (
    <div className="relative bg-pinky bg-opacity-25 rounded-lg overflow-hidden rounded-tl-[65px] rounded-br-[65px]">
      {/* Background Image */}
      <img
        src={f_img}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      
      {/* Pink Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-pinky bg-opacity-40 z-1"></div>

      {/* Content */}
      <div className="p-5 text-white text-center relative z-2">
        <h2 className="text-xl font-bold">Create Your Event Now!</h2>
        <p className="mt-2">Unleash the extraordinary with our seamless event booking platform.</p>
        <button className="mt-4 bg-white text-purple-700 px-4 py-2 rounded-full font-semibold">
          Create Now
        </button>
      </div>
    </div>
  );
}

export default FooterCreateEvent;
