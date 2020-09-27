import React from "react";
import AutoplaySlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "../App.css"

const Carousel = () => (
    <AutoplaySlider 
    className="carousel"  
    bullets={false}     
    play={true}
    cancelOnInteraction={false}
    interval={10}>
        <div data-src={require("../images/E_lecticLogi_ Logo (4).png")}></div>
        <div data-src={require("../images/covidtracker.PNG")}></div>
        <div data-src={require("../images/kPortfolio.PNG")}></div>
        <div data-src={require("../images/portfolioSnap.PNG")}></div>
        <div data-src={require("../images/updateddbArch.PNG")}></div>
        <div data-src={require("../images/portfolioSnip2.PNG")}></div>
    </AutoplaySlider>
  )
  
export default Carousel