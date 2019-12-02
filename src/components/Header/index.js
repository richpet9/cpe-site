import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ navItems }) => {
    //Get the preferred width from # of items
    const preferredWidth = Math.floor(100 / navItems.length) + '%';
    const [miniature, setMiniature] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const headerContainer = useRef();
    const hamburgerMenu = useRef();

    const checkCollapse = () => {
        if (window.innerWidth < 740) {
            setCollapse(true);
        } else {
            setCollapse(false);
        }
    };

    const checkMini = () => {
        if (window.scrollY > headerContainer.current.scrollHeight) {
            setMiniature(true);
        } else {
            setMiniature(false);
        }
    };

    const showMenu = () => {
        hamburgerMenu.current.style.display = hamburgerMenu.current.style.display === 'block' ? 'none' : 'block';
    };

    window.onload = () => {
        checkCollapse();
        checkMini();
    };

    window.onscroll = checkMini;

    window.onresize = checkCollapse;

    return (
        <header ref={headerContainer} className={miniature ? 'mini' : ''}>
            <nav className="container flex-between">
                <div className="brand-container">
                    <a href="/">
                        <img className="brand-logo" src="/img/brand-white.png" alt="Community Programming & Events" title="Home" />
                        <div className="brand-name">
                            <h1 className="community">Community</h1>
                            {collapse && miniature ? '' : <h2 className="p-e"> Programming & Events</h2>}
                        </div>
                    </a>
                </div>
                {!collapse && (
                    <ul>
                        {navItems.map(item => {
                            //Render each nav item in a list-item and link
                            return (
                                <li key={item.copy} style={{ width: preferredWidth }}>
                                    <a href={item.url} title={item.copy}>
                                        <span>{item.copy}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                )}
                {collapse && (
                    <div className="nav-hamburger-container">
                        <span onClick={showMenu}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </span>
                        <nav className="nav-hamburger" ref={hamburgerMenu}>
                            <ul>
                                {navItems.map(item => {
                                    //Render each nav item in a list-item and link
                                    return (
                                        <li key={item.copy} style={{ width: preferredWidth }}>
                                            <a href={item.url} title={item.copy}>
                                                <span>{item.copy}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                )}
            </nav>
        </header>
    );
};

Header.propTypes = {
    //This defines what the navItems prop should look like, and is removed by babel for production
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            copy: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Header;
