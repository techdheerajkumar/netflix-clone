import React from "react";
import Card from "../Card/Card";
import Carousel from "react-elastic-carousel";
export const CardSlider = (props) => {
  return (
    <div className="card-slider py-5">
      <div className="container-fluid">
        <div className="row">
          <h2 className="mb-5 px-5 text-white">{props.title}</h2>
          <Carousel itemsToShow={5} showArrows={false} pagination={false}>
            {props.getData.map((item, index) => {
              return (
                <Card
                  key={item.id}
                  title={item.name}
                  imgPath={item.poster_path}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
