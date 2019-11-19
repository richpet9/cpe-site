import React from 'react';
import Hero from '../../components/Hero';

const Home = () => {
    //80% of the window's height
    const heroHeight = window.innerHeight * 0.9;
    const backgroundURLs = ['/img/hero-bg-0.jpg', '/img/hero-bg-1.jpg', '/img/hero-bg-2.jpg', '/img/hero-bg-3.jpg'];
    return (
        <div>
            <Hero height={heroHeight} backgroundURLs={backgroundURLs} />
            <div className="container">
                <h1>Hello!</h1>
            </div>
        </div>
    );
};

export default Home;
