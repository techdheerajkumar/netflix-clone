import React from 'react';
import FeatureSlider from '../components/FeatureSlider/FeatureSlider';
import { CardSlider } from '../components/CardSlider/CardSlider';
export const Movies = (props) => {
    return (
        <div>
            <FeatureSlider getData = {props.movieData}/>
            <CardSlider getData = {props.actionMovie    } title="Action Movies"/>
        </div>
    );
};
