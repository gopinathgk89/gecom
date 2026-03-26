import React from "react";
import './App.css';
import baner1 from "./baner1.JPG";  
import baner2 from "./baner2.JPG";
import baner3 from "./baner3.JPG";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
  
   

const ImageSlider = () => {

   const imageBaseUrl = "http://localhost:8013/api/banner/image/";
  return (
    <div className="container-fluid" style={{width:'100%'}}> 
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >  
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"      
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src={`${imageBaseUrl}${1}`}
              className="d-block  w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={`${imageBaseUrl}${2}`}
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={`${imageBaseUrl}${3}`}
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>

        

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );  
};

export default ImageSlider;
