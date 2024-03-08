import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = ({ slides }) => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={false}
      interval={1000} // Change the interval as needed
      >
        {slides.map((slides, index) => (
          <div key={index} className='aspect-ratio:4/3 ml-8 mr-8'>
            <img
              style={{ height: '90vh', width: '100%', objectFit: 'cover',objectPosition:'center', marginTop :'0px' }}
              className='rounded-[45px] '
              src={slides.src}
              alt={`Slides ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    );
  };
  
  export default ImageSlider;












/*import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const ImageSlider = ({ slides }) => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={1000} // Change the interval as needed
    >
     {slides.map((slide, index) => (
        <div key={index} style={{ minHeight: 'calc(100vh / 3)' }}>
          <img
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            src={slide.src}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;








/*import { useState, useEffect } from "react";

export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval); // Typo fix: use clearInterval instead of clearinterval
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500 overflow-hidden w-auto md:w-full md:h-40 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
*/