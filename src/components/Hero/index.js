import React from 'react';
import PropTypes from 'prop-types';

import './Hero.css';

const Hero = props => {
    //80% of the window's height
    const preferredHeight = window.innerHeight * 0.8;

    return (
        <div id="hero-container" style={{ height: preferredHeight }}>
            <div id="hero-copy" className="container">
                <h1>Help support your community.</h1>
                <h3>5,324+ others have already chipped in.</h3>
            </div>
        </div>
    );
};

Hero.propTypes = {};

export default Hero;
