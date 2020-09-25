import React from 'react';
import '../App.css';

const Header = () => {

    return (
        <header>
            <h1><a href="http://localhost:3000/">EclecticLogic</a></h1>
            <div className="header-links">
                <a href="http://localhost:3000/contact">Contact</a>
                <a href="http://localhost:3000/about">About</a>
                <a href="https://eclectic-blog.vercel.app/">Blog</a>
            </div>
        </header>
    )

}

export default Header;