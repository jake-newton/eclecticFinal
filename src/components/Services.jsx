import React from 'react';
import '../App.css';

const Services = () => {

    return (
        <section class="py-20 px-6">
            <div className="landing-content">
            <h1 className="main-title">What We Offer</h1>
            <div className="content-card">
                <div className="title-div">
                <h2 className="title">Networking Solutions</h2>
                <p>Design, configuration, and optimization of physical and virtual networks for businesses and homes.</p>
                </div>
                <div className="title-div">
                <h2 className="title">Web Development</h2>
                <p>UX Design, frontend and backend website devlopment that is scalable, and mobile/tablet compatible.</p>
                </div>
                <div className="title-div">
                <h2 className="title">Server Infrastructure</h2>
                <p>Consulting and implementation of physical and virtual server environments tailored to your needs.</p>
                </div>
                <div className="title-div">
                <h2 className="title">Database Development</h2>
                <p>Design and optimization of SQL and NoSQL databases, with a strong background in scientific data analytics.</p>
                </div>
                <div className="title-div">
                <h2 className="title">Cybersecurity</h2>
                <p>Risk assessment, hardening, and secure architecture services backed by Security+ and CCNA expertise.</p>
                </div>
                <div className="title-div">
                <h2 className="title">Data Analytics</h2>
                <p>Advanced analysis and visualization of business or scientific datasets, including genomics and beyond.</p>
                </div>
            </div>
            </div>
        </section>
    )

}

export default Services;