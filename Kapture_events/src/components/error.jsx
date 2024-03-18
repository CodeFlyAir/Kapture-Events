
import React from 'react';
import ReactDOM from 'react-dom';
import App from './header.jsx';
import './indexx.css'
import Footer from './footer.jsx';

import event_poster1 from '../assets/poster1.svg';
import event_poster2 from '../assets/poster2.svg';
import event_poster3 from '../assets/poster3.svg';
import picture1 from '../assets/picture1.jpeg';
import picture2 from '../assets/picture2.webp';
import ImageSlider from './Carousel.jsx'
import image1 from '../assets/gallery1.svg';
import image2 from '../assets/poster2.svg';
import image3 from '../assets/poster3.svg';
import image4 from '../assets/poster1.svg';
import Filter_ from './Filter_.jsx';
import Pict from './pict.jsx';
import filter2 from './Filter_.jsx'
import Card from './Card.jsx';
import FooterCreateEvent from './FooterCreateEvent.jsx'
import Gallerym from './Gallerym.jsx';
import RegistrationForm from './RegistrationForm.jsx';
import Errorshow from './errorshow.jsx';
const slides = [
    { src: event_poster1 },
    { src: event_poster2 },
    { src: event_poster3 },
    { src: picture1},
    { src : picture2}
 
];
function Error() {
    return (
        <>
        
       
        <Errorshow/>
        <Footer/>
        
        </>
    )
}

export default Error