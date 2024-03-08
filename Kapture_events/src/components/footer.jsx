import React from 'react';
import foot from '../assets/Event.svg'
const footx = {src: foot}
const Footer = () => {
  return (
    <div className="bg-black text-white p-4 h-64 mt-6 font-poppins">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <button className="p-2 hover:bg-gray-700">
          <img src={footx.src} alt={'image'} className="w-full h-full object-cover" />
          
          </button>
          <button className="p-2 hover:bg-gray-700">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'].map((header, index) => (
          <div key={index} className="space-y-2">
            <h3>{header}</h3>
            {['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'].map((item, i) => (
              <p key={i} className="text-sm">{item}</p>
            ))}
          </div>
        ))}
      </div>

      {/* Add additional footer content here */}
    </div>
  );
};

export default Footer;