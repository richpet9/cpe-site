import React from 'react';

import './Grid.css';

const Grid = ({ label, items }) => {
    return (
        <div className="grid-container">
            <h1 className="grid-label">{label}</h1>
            <div className="grid-item-container flex-between">
                {items.map(item => {
                    return (
                        <div className="grid-item">
                            <span>{item}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Grid;
