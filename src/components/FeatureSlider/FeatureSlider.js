import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import FullWidthImageText from '../FullWidthImageText/FullWidthImageText';
import './feature-slider.css';

export default function FeatureSlider(props) {
    return (
        <div className="feature-slider w-100 position-relative">
            <Carousel itemsToShow={1}>
                {props.getData.map((item, index)=>{
                   return <FullWidthImageText 
                        key = {index} 
                        title={item.name || item.original_title}
                        imgPath ={item.backdrop_path}
                        description = {item.overview}/>
                })}
            </Carousel>
        </div>
    );
}
