import React from 'react';
import Hero from '../../components/Hero';
import HorizontalList from '../../components/HorizontalList';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Home = () => {
    //90% of the window's height
    const heroHeight = window.innerHeight * 0.9;
    const backgroundURLs = ['/img/hero/hero-bg-0.jpg', '/img/hero/hero-bg-1.jpg', '/img/hero/hero-bg-2.jpg', '/img/hero/hero-bg-3.jpg', '/img/hero/hero-bg-4.jpg'];

    //This would be database data
    const news = [
        {
            name: 'Check out this Headline!',
            body:
                'Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempororci nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.',
            imgSrc: ''
        },
        {
            name: 'Check out this Headline!',
            body:
                'Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempororci nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.',
            imgSrc: ''
        },
        {
            name: 'Check out this Headline!',
            body:
                'Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempororci nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.',
            imgSrc: ''
        },
        {
            name: 'Check out this Headline!',
            body:
                'Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempororci nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.',
            imgSrc: ''
        }
    ];

    //This would also be database data
    const events = [
        {
            name: 'Check out this Headline!',
            body:
                'Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempororci nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.',
            imgSrc: ''
        },
        {
            name: 'Check out this Headline!',
            body:
                'Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempororci nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.',
            imgSrc: ''
        },
        {
            name: 'Check out this Headline!',
            body:
                'Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempororci nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.',
            imgSrc: ''
        },
        {
            name: 'Check out this Headline!',
            body:
                'Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempororci nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.',
            imgSrc: ''
        }
    ];

    const rightHeroChild = (
        <div className="hero-right">
            <h1>
                Help support your <span className="green-text">Community.</span>
            </h1>
            <h3 className="light-text">
                <strong className="green-text">+5,324</strong> others have already chipped in.
            </h3>
            <p className="hero-description">
                Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempor orci
                nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.
            </p>

            <Button linkTo="/donate" icon="fas fa-arrow-right" bgColor="#00d1b8" title="Donate Today!" />
        </div>
    );

    return (
        <div>
            <Hero height={heroHeight} backgroundURLs={backgroundURLs} leftChild={null} rightChild={rightHeroChild} />
            <span id="events" style={{ position: 'relative', top: -32 }} />
            <section className="container" style={{ marginTop: 32, marginBottom: 100 }}>
                <HorizontalList label="Upcoming Events">
                    {events.map(newsItem => {
                        return <Card key={Math.random()} headline={newsItem.name} body={newsItem.body} img={newsItem.imgSrc} />;
                    })}
                </HorizontalList>
                <HorizontalList label="Community News">
                    {news.map(newsItem => {
                        return <Card key={Math.random()} headline={newsItem.name} body={newsItem.body} img={newsItem.imgSrc} />;
                    })}
                </HorizontalList>
            </section>
        </div>
    );
};

export default Home;
