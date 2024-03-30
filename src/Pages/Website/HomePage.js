// import ImageSlider from "react-simple-image-slider";
// import { Zoom } from "react-slideshow-image";
// import Slider from "react-slick";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import Slider from "../../Components/Slider";
import Products from "./Products";
import React from 'react';

// import ImageSlider from "../../Components/ImageSlider";
// import { SliderData } from "../../SliderData";

export default function HomePage() {
  
    return (
      <>
      <NavBar></NavBar>
      <Slider></Slider>
      {/* <Slider slides={SliderData} /> */}

      {/* <img src={background} className="background"></img> */}
      {/* <ImageSlider slides={SliderData} /> */}
      {/* <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div> */}
      <Products></Products>
      <Footer></Footer>
      </>
    );
}