import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "../App.css"

const Carousel = () => (
    <AwesomeSlider 
    className="carousel"  
    bullets={false}     
    play={true}
    cancelOnInteraction={false}
    interval={10}
    >
        <div alt="Company logo" data-src={require("../images/E_lecticLogi_ Logo (4).png")}></div>
        <div alt="Covid-19 tracking project" data-src={require("../images/covidtracker.PNG")}></div>
        <div alt="example database architecture" data-src={require("../images/updateddbArch.PNG")}></div>
    </AwesomeSlider>
  )
  
export default Carousel