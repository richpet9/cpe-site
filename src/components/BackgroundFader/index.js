import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const BackgroundFader = ({ height, backgroundURLs }) => {
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
        <div className="background-fader">
            <div className="hero-bg-next" ref={bgNextContainer} style={{ height: height, backgroundImage: nextBackground.src }}></div>
            <div className="hero-bg" ref={bgCurrentContainer} style={{ height: height, backgroundImage: currentBackground.src }}></div>
        </div>
    );
};

BackgroundFader.propTypes = {
    height: PropTypes.number.isRequired,
    backgroundURLs: PropTypes.arrayOf(PropTypes.string)
};

export default BackgroundFader;
