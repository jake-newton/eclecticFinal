import React from 'react';
import '../App.css';

const Header = () => {

    return (
        <header>
            <h1><a href="https://eclecticlogic.org/">EclecticLogic</a></h1>
            <div className="header-links">
                <a href="https://eclecticlogic.org/services">Services</a>
                <a href="https://eclecticlogic.org/contact">Contact</a>
                <a href="https://eclecticlogic.org/about">About</a>
                <a href="https://eclectic-blog.vercel.app/">Blog</a>
            </div>
        </header>
    )

}

export default Header;