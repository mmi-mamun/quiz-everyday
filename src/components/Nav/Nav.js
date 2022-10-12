import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <div className="container nav">
                <div className="site-name">
                    <h3>QUIZ EVERYDAY</h3>
                </div>
                <div className="nav-design">
                    <Link to='/home'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>My Blog</Link>
                </div>
            </div>
        </div >
    );
};

export default Nav;