import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import FullWidthImageText from '../FullWidthImageText/FullWidthImageText';
import './feature-slider.css';

export default function FeatureSlider(props) {
    useEffect(()=>{
        props.getData.map((item, index)=>{
            console.log(item.poster_path) ;
            // console.log(item) ;
        })
    })
    return (
        <div className="feature-slider w-100">
            <Carousel itemsToShow={1}>
                {props.getData.map((index, item)=>{
                   return <FullWidthImageText key = {item.id} title={item.original_title || item.name} imgPath ={item.poster_path}/>
                })}
            </Carousel>
        </div>
    );
}
