import React from 'react';
import Card from '../Card/Card';
import Carousel from 'react-elastic-carousel';
export const CardSlider = () => {
    return (
        <div>
            <Carousel itemsToShow={4}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Carousel>
        </div>
    );
};
