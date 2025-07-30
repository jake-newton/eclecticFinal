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
                <div>
                    <h1 className="company-description">Eclectic Logic LLC</h1>
                    <p>Design, Consulting, and Development of Modern Web & Tech Solutions in Tucson & Phoenix</p>
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
                            <p>Implementation of secure and scalable systems including servers, virtual machines, databases, and analytics platforms—optimized and future-ready.</p>
                        </div>
                    </div>
                </div>
                <section class="bg-blue-600 text-white py-16 px-6">
                    <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl font-bold mb-4">Let's Build Your Solution</h2>
                    <p class="mb-6 text-lg">Whether it's setting up secure networks, designing efficient systems, or analyzing complex data—we're ready to help.</p>
                    <a href="mailto:jake.newton@eclecticlogic.com" class="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">Contact Us Today</a>
                    </div>
                </section>
            </div>    
            
    )

}

export default Landing;