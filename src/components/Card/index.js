import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = ({ headline, body, img }) => {
    return (
        <div className="card-container">
            <img src={img} alt={headline} />
            <h3>{headline}</h3>
            <p>{body}</p>
        </div>
    );
};

Card.propTypes = {
    headline: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    img: PropTypes.string
};

export default Card;
