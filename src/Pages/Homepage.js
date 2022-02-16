import React from 'react';
import { CardSlider } from '../components/CardSlider/CardSlider';
import FeatureSlider from '../components/FeatureSlider/FeatureSlider';
export default function Homepage(props) {

    return (
        <>
            <FeatureSlider getData = {props.data}/>
            <CardSlider getData = {props.originalsData} title="Netflix Originals"/>
            <CardSlider getData = {props.originalsData} title="Latest Movies"/>
        </>
    );
}
