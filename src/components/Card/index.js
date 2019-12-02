import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = ({ headline, body, img }) => {
    if (body.length > 200) {
        body = body.substring(0, 200) + '...';
    }
    return (
        <div className="card-container">
            <div className="img-container" style={{ backgroundImage: 'url("' + img + '")' }}></div>
            <h3>{headline}</h3>
            <p>
                {body}
                <br />
                <a href="#">Read more</a>
            </p>
        </div>
    );
};

Card.propTypes = {
    headline: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    img: PropTypes.string
};

export default Card;
