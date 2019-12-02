import React from 'react';
import PropTypes from 'prop-types';
import BackgroundFader from './BackgroundFader';

import './Hero.css';
import { isArray } from 'util';

const Hero = ({ height, backgroundURLs, leftChild, rightChild }) => {
    const isBackgrounds = isArray(backgroundURLs);

    return (
        <div id="hero-container" style={{ height: height }}>
            {isBackgrounds && <BackgroundFader height={height} backgroundURLs={backgroundURLs} />}
            {!isBackgrounds && <div className="hero-bg" style={{ backgroundImage: 'url("' + backgroundURLs + '")' }}></div>}
            <div className="hero-copy container flex-around">
                <div className={'hero-left hero-children ' + (!leftChild ? 'spacer' : 'copy')}>{leftChild || ''}</div>
                <div className={'hero-right hero-children ' + (!rightChild ? 'spacer' : 'copy')}>{rightChild || ''}</div>
            </div>
        </div>
    );
};

Hero.propTypes = {
    height: PropTypes.number.isRequired,
    backgroundURLs: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    leftChild: PropTypes.element,
    rightChild: PropTypes.element
};

export default Hero;
