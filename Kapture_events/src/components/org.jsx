import React from 'react';
import App from './header.jsx';
import Organisation from './organisation.jsx';
import Footer from './footer.jsx';
import ImageSlider from './Carousel.jsx';
import Filternew_ from './org_filter.jsx';

import event_poster1 from '../assets/poster1.svg';
import event_poster2 from '../assets/poster2.svg';
import event_poster3 from '../assets/poster3.svg';
import picture1 from '../assets/picture1.jpeg';
import picture2 from '../assets/picture2.webp';

const slides = [
    { src: event_poster1 },
    { src: event_poster2 },
    { src: event_poster3 },
    { src: picture1 },
    { src: picture2 }
];

function Org() {
    return (
        <>
           
            <div className="image-slider-container">
                <ImageSlider slides={slides} />
            </div>
            <Filternew_/>
            <div style={{ marginTop: '2rem' }}>
                <Organisation />
            </div>
            
            <div style={{ marginTop: '4rem' }}>
                <Footer />
            </div>
        </>
    );
}

export default Org;
