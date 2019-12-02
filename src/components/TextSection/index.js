import React from 'react';

import './TextSection.css';

const TextSection = ({ title, text, imgSrc }) => {
    return (
        <div className="text-section flex">
            <h1>{title}</h1>
            {text}
            {imgSrc || ''}
        </div>
    );
};

export default TextSection;
