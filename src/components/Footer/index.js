import React from 'react';
import HorizontalList from '../HorizontalList';

import './Footer.css';

const Footer = () => {
    let socialLinks = [];

    socialLinks.push(
        <p>
            <a href="https://facebook.com" title="Facebook">
                <i className="fab fa-facebook-square"></i>
            </a>
        </p>
    );
    socialLinks.push(
        <p>
            <a href="https://instagram.com" title="Instagram">
                <i className="fab fa-instagram"></i>
            </a>
        </p>
    );
    socialLinks.push(
        <p>
            <a href="https://twitter.com" title="Twitter">
                <i className="fab fa-twitter-square"></i>
            </a>
        </p>
    );
    socialLinks.push(
        <p>
            <a href="https://linkedin.com" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
            </a>
        </p>
    );
    socialLinks.push(
        <p>
            <a href="mailto:example.com" title="Email">
                <i class="fas fa-envelope"></i>
            </a>
        </p>
    );

    return (
        <footer>
            <div className="container flex-between">
                <div className="brand-container">
                    <a href="/">
                        <img className="brand-logo" src="/img/brand-white.png" alt="Community Programming & Events" title="Home" />
                        <div className="brand-name">
                            <h1 className="community">Community</h1>
                            <h2 className="p-e"> Programming & Events</h2>
                        </div>
                    </a>
                </div>
                <div className="socials-container">
                    <HorizontalList children={socialLinks}></HorizontalList>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
