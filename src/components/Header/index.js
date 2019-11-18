import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ navItems }) => {
    //Get the preferred width from # of items
    const preferredWidth = Math.floor(100 / navItems.length) + '%';

    return (
        <header>
            <nav className="container flex-between">
                <div id="brand-container">
                    <a href="/">
                        <img id="brand-logo" src="/img/brand-white.png" alt="Community Programming & Events" title="Home" />
                        <div id="brand-name">
                            <h1 id="community">Community</h1>
                            <h2 id="p-e"> Programming & Events</h2>
                        </div>
                    </a>
                </div>
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
