import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ linkTo, icon, bgColor, title }) => (
    <div className="button-container">
        <a href={linkTo} className="button" title={title} style={{ background: bgColor || 'transparent' }}>
            DONATE TODAY {icon && <span className={icon}></span>}
        </a>
    </div>
);

Button.propTypes = {
    linkTo: PropTypes.string.isRequired,
    icon: PropTypes.string,
    bgColor: PropTypes.string,
    title: PropTypes.string
};

export default Button;
