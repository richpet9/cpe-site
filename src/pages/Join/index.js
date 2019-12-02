import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../../components/Hero';

const Join = () => {
    return (
        <div>
            <Hero
                height={400}
                backgroundURLs={'../img/join-header.jpg'}
                leftChild={
                    <div className="big-text" style={{ textAlign: 'center' }}>
                        Join the Community
                    </div>
                }
                rightChild={null}
            />
        </div>
    );
};

export default Join;
