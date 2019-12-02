import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../../components/Hero';
import Grid from '../../components/Grid';

const Services = () => {
    const gymItems = ['Weights', 'Treadmills', 'Body-Weight Machines', 'Pulley Systems', 'Free Weight Benches', 'Guided Racks', 'Deadlift Pads', 'Heavy Bags', 'Ropes'];

    const camps = ['Summer', 'After School', 'Simon Says', 'Robot Adventure', 'Coding Contest', 'Swimming', 'Crafting', 'Scouting', 'Leaders in Training'];

    const amentities = ['Sauna', 'Lap Pool', 'Wave Pool', 'Infinitiy Pool', 'Hot tub', 'Therapy Pool', 'Locker Rooms', 'Classrooms'];

    return (
        <div style={{ textAlign: 'center' }}>
            <Hero height={400} backgroundURLs={'../img/services-header.jpg'} leftChild={<div className="big-text">Services We Offer</div>} rightChild={null} />
            <Grid label="Gym" items={gymItems} />
            <Grid label="Camps" items={camps} />
            <Grid label="Ammentities" items={amentities} />
        </div>
    );
};

export default Services;
