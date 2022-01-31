import React from "react";
import "./full-width-image-text.css";

export default function FullWidthImageText(props) {
  return (
    <div className="fw-image-text  position-relative w-100" >
      <div className="container position-relative h-100">
        <div className="row h-100 flex-column justify-content-center px-5">
          <div className="fw-text-content col-md-6">
            <h1 className="text-white ds">{props.title}</h1>
            <p className="text-white ds">{props.description}</p>
            <a href="#" className="watch-now btn btn-danger">
              Watch nows
            </a>
          </div>
        </div>
      </div>
      <figure className=" position-absolute feature-poster-wrapper h-100 w-100">
        <img
          className="w-100 feature-poster"
          src={`https://image.tmdb.org/t/p/original/${props.imgPath}`}
        />
      </figure>
    </div>
  );
}
