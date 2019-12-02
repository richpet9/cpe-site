import React from 'react';
import PropTypes from 'prop-types';

import './HorizontalList.css';

const HorizontalList = ({ children, label }) => {
    return (
        <div className="h-list space flex-between">
            {label && (
                <li className="h-list-item h-list-label">
                    <h2>{label}</h2>
                </li>
            )}
            {children.map(child => {
                return (
                    <li className="h-list-item" key={child.key}>
                        {child}
                    </li>
                );
            })}
        </div>
    );
};

HorizontalList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    label: PropTypes.string
};

export default HorizontalList;
