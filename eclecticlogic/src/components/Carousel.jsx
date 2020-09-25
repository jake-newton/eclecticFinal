import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "../App.css"

const Carousel = () => (
    <AwesomeSlider className="carousel"  bullets={false} play={true}>
        <div data-src={require("../images/covidtracker.PNG")}></div>
        <div data-src={require("../images/kPortfolio.PNG")}></div>
        <div data-src={require("../images/portfolioSnap.PNG")}></div>
        <div data-src={require("../images/updateddbArch.PNG")}></div>
        <div data-src={require("../images/portfolioSnip2.PNG")}></div>
    </AwesomeSlider>
  )
  
export default Carousel