import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import './Hero.css';

const Hero = ({ height, backgroundURLs }) => {
    const backgrounds = backgroundURLs.map((url, index) => {
        return {
            index: index,
            src: "url('" + url + "')"
        };
    });

    const [currentBackground, setCurrentBackground] = useState(backgrounds[0]);
    const [nextBackground, setNextBackground] = useState(backgrounds[1]);
    const bgCurrentContainer = useRef();
    const bgNextContainer = useRef();

    const changeBackground = index => {
        setNextBackground(backgrounds[index]);
        bgCurrentContainer.current.className = 'hero-bg transition';
        setTimeout(() => {
            setCurrentBackground(backgrounds[index]);
            bgCurrentContainer.current.className = 'hero-bg';
        }, 700);
    };

    useEffect(() => {
        const backgroundInterval = setInterval(() => {
            changeBackground((currentBackground.index + 1) % backgrounds.length);
        }, 5000);

        return () => clearInterval(backgroundInterval);
    });

    return (
        <div id="hero-container" style={{ height: height }}>
            <div className="hero-bg-next" ref={bgNextContainer} style={{ height: height, backgroundImage: nextBackground.src }}></div>
            <div className="hero-bg" ref={bgCurrentContainer} style={{ height: height, backgroundImage: currentBackground.src }}></div>
            <div className="hero-copy container flex-around">
                <div className="hero-left hero-children spacer"></div>
                <div className="hero-right hero-children">
                    <h1>
                        Help support your <i className="green-text">Community.</i>
                    </h1>
                    <h3 className="light-text">
                        <strong className="green-text">+5,324</strong> others have already chipped in.
                    </h3>
                    <p className="hero-description">
                        Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempor
                        orci nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.
                    </p>

                    <Button linkTo="#" icon="fas fa-arrow-right" bgColor="#00d1b8" title="Donate Today!" />
                </div>
            </div>
        </div>
    );
};

Hero.propTypes = {
    height: PropTypes.number.isRequired,
    backgroundURLs: PropTypes.arrayOf(PropTypes.string)
};

export default Hero;
