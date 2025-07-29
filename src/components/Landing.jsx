import React from 'react';
import Carousel from "./Carousel"
import '../App.css';

const Landing = () => {

    return (
            <div className="Landing">
                <div className="company-desc-div">
                    <h1 className="company-description">Consulting</h1>
                    <h1 className="company-description">Design</h1>
                    <h1 className="company-description">Development</h1>
                </div>
                <Carousel />
                <div className="landing-content">
                    <h1 className="main-title">Our Three Step Process</h1>
                    <div className="content-card">
                        <div className="title-div">
                            <h1 className="title">Step 1: Consult</h1>
                            <div className="w3-border">
                                <div className="w3-1"/>
                            </div>
                        </div>
                        <div className="content">
                            <i className="fab fa-discourse fa-4x"></i>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu odio et tellus laoreet feugiat porttitor quis diam. Curabitur auctor ex quis rhoncus faucibus. Quisque eget erat in augue varius sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum pellentesque porta feugiat. Quisque maximus.
                            </p>
                        </div>
                    </div>
                    <div className="content-card">
                        <div className="title-div">
                            <h1 className="title">Step 2: Design</h1>
                            <div className="w3-border">
                                <div className="w3-2"/>
                            </div>
                        </div>
                        <div className="content">
                        <i className="fas fa-pen-nib fa-4x"></i>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu odio et tellus laoreet feugiat porttitor quis diam. Curabitur auctor ex quis rhoncus faucibus. Quisque eget erat in augue varius sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum pellentesque porta feugiat. Quisque maximus.
                            </p>
                        </div>
                    </div>
                    <div className="content-card">
                    <div className="title-div">
                        <h1 className="title">Step 3: Develop</h1>
                        <div className="w3-border">
                            <div className="w3-3"/>
                        </div>
                    </div>
                        <div className="content">
                            <i className="fas fa-code fa-4x"></i>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu odio et tellus laoreet feugiat porttitor quis diam. Curabitur auctor ex quis rhoncus faucibus. Quisque eget erat in augue varius sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum pellentesque porta feugiat. Quisque maximus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>    
            
    )

}

export default Landing;