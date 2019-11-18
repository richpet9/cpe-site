import React from 'react';
import PropTypes from 'prop-types';

import './Hero.css';

const Hero = props => {
    //80% of the window's height
    const preferredHeight = window.innerHeight * 0.8;

    return (
        <div id="hero-container" style={{ height: preferredHeight }}>
            <div id="hero-copy" className="container flex-around">
                <div id="hero-left spacer"></div>
                <div id="hero-right" className="hero-children">
                    <h1>
                        Help support your <i className="green-text">Community.</i>
                    </h1>
                    <h3 className="light-text">
                        <strong className="green-text">5,324+</strong> others have already chipped in.
                    </h3>
                    <div className="button-container" style={{ paddingBottom: 0 }}>
                        <a href="#" className="button knockout" title="title">
                            DONATE TODAY
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Hero.propTypes = {};

export default Hero;
