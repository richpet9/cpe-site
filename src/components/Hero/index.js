import React, { useState } from 'react';
import Button from '../Button';

import './Hero.css';

const Hero = props => {
    //80% of the window's height
    const [height, setHeight] = useState(window.innerHeight * 0.8);

    window.onresize = () => {
        if (height != window.innerHeight * 0.8) {
            setHeight(window.innerHeight * 0.8);
        }
    };

    return (
        <div id="hero-container" style={{ height: height }}>
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

export default Hero;
