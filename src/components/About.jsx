import React from 'react';
import '../App.css';

const About = () => {
    return (
        <div className="About">
            <div className="About-Title">
                <p>EclecticLogic's Vision...</p>
            </div>
            <div id="top">
                <div className="boxes">
                    <p className="vision">The most exciting part of the modern Web is it's ability to provide visibility and exposure to anyone with the capability of developing a website. However, we believe this visibility and exposure should extend to anyone that wants to use it to better themselves, their community, or the world, not just those fluent in website design and development. <strong>Everyone should have the ability to pioneer this new frontier, and we intend to deliver that ability straight to you.</strong></p>
                </div>
            </div>
            <div className="About-Title">
                    <p>Founding Team</p>
            </div>
            <div id="top">
                <div className="boxes">
                    <p className="vision">Xue</p>
                    <p>CEO and Data Analyst</p>
                </div>
                <div className="boxes">
                    <p className="vision"><a href="https://jake-newton.github.io">Jake</a></p>
                    <p>Cyber Systems Engineer</p>
                    <img className="devpic" alt="Jake" src={require("../images/Jake.jpg")} /> 
                </div>
                <div className="boxes">
                    <p className="vision"><a href="https://eclecticlogic.org/Connor">Connor</a></p>
                    <p>Web Developer and Founder</p>
                    <img className="devpic" alt="Connor" src={require("../images/cs5.jpg")} /> 
                </div>
                <div className="boxes">
                    <p className="vision">Colton</p>
                    <p>Project Manager</p>
                </div>
            </div>
        </div>    
    );
}

export default About;