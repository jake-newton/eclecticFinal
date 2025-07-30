import React from 'react';
import '../App.css';

const Connor = () => {

        return (
            <div className="About">
            <div  className="About-Title">
                    <p>Connor's Vision...</p>
                </div>
                <div id="top">
                    <div className="boxes">
                        <p className="vision">The most exciting part of the modern Web is it's ability to provide visibility and exposure to anyone with the capability of developing a website. This visibility and exposure should be extended to everyone, not just those fluent in website design and development. <strong>Everyone should have the ability to pioneer this new frontier.</strong></p>
                    </div>
                </div>
                <div  className="About-Title">
                    <p>A little bit about our Founder...</p>
                </div>
                <div id="top">
                    <div className="boxes">
                        <p className="vision">I was born and raised in Central and Southern Arizona, and throughout my life I have been <strong>passionate about solving problems,</strong> particularly logic problems and philosophy. Following this path, I ended up getting a degree in Criminology with a minor in Philosophy from NAU, and I went on to apply to my local Police Department. Throughout my training process and on into the academy however, my passion was still deeply rooted philosophy, <strong>particularly in logic</strong>, and I knew the best way for me to get back to what I really loved was web development.<br></br>    <br></br>I enrolled in <a target="_blank" rel="noopener noreferrer" href="https://lambdaschool.com/"><strong>Lambda School</strong></a> to further pursue this dream, during my journey there I studied <strong>Web Development,</strong> and was tasked with building multiple collaborative projects and individual assignments and assessments. These projects consisted of everything from a <a target="_blank" rel="noopener noreferrer" href="https://sleepmood.netlify.app/"><strong>user-friendly marking page</strong></a> for a web application, up to a <a target="_blank" rel="noopener noreferrer" href="https://omega2020.netlify.app/"><strong>fully fledged web application</strong></a> produced with React and connected to a fully deployed database and backend. Now, a year from that initial realization, I have completed my Full Stack Web Development endorsement from Lambda School and have stepped full time into the world of Full Stack Web Development to continue to <strong>solve problems and build amazing things. </strong></p>
                    </div>
                    {/* <div className="boxes"> */}
                        <img className="devpic" alt="The Developer" src={require("../images/cs1.jpg")} />           
                    {/* </div> */}
                </div>
            </div>    
        );

}

export default Connor;