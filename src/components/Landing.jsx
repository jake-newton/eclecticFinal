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
                <div className="landing-content">
                    <h1 className="title">Eclectic Logic LLC</h1>
                    <p>Design, Consulting, and Development of Modern Web & Tech Solutions in Tucson & Phoenix</p>
                </div>
                <Carousel />
                <div className="landing-content">
                    <h1 className="main-title">Our Four Step Process</h1>
                    <div className="content-card">
                        <div className="title-div">
                            <h1 className="title">Step 1: Consult</h1>
                            <div className="w3-border">
                                <div className="w3-1"/>
                            </div>
                        </div>
                        <div className="content">
                            <i className="fab fa-discourse fa-4x"></i>
                            <p>Expert consulting for network architecture, cloud/on-prem infrastructure, server setups, and IT strategy. Backed by CompTIA Security+ and Cyber Operations degrees.</p>
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
                            <p>Customized hardware and software system design—whether it's a personal passion project or an enterprise solution. From physical networking to cloud-native design.</p>
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
                                <p>Implementation of secure and scalable systems including servers, websites, virtual machines, databases, and analytics platforms—optimized and future-ready.</p>
                            </div>
                        </div>
                        <div className="content-card">
                        <div className="title-div">
                            <h1 className="title">Step 4: Deploy</h1>
                            <div className="w3-border">
                                <div className="w3-4"/>
                            </div>
                        </div>
                        <div className="content">
                            <i className="fa fa-cloud-upload fa-4x"></i>
                            <p>We communicate with you to make deployment of your solutions seamless, and fast.</p>
                        </div>
                    </div>
                </div>
                <div className="landing-content">
                    <h1 className="main-title">Let's Build Your Solution</h1>
                    <p>Whether it's setting up secure networks, designing efficient systems, or analyzing complex data—we're ready to help.</p>
                    <a href="mailto:jake.newton@eclecticlogic.com">Contact Us Today</a>
                </div>
            </div>    
            
    )

}

export default Landing;