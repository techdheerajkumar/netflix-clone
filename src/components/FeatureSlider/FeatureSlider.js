import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import FullWidthImageText from '../FullWidthImageText/FullWidthImageText';
import './feature-slider.css';

export default function FeatureSlider() {
    


    return (
        <div className="feature-slider w-100">
            <Carousel itemsToShow={1}>
                <FullWidthImageText />
                <FullWidthImageText />
                <FullWidthImageText />
                <FullWidthImageText />
                <FullWidthImageText />
                <FullWidthImageText />
                <FullWidthImageText />
                <FullWidthImageText />
                <FullWidthImageText />
                <FullWidthImageText />
            </Carousel>
        </div>
    );
}
