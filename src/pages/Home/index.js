import React from 'react';
import Hero from '../../components/Hero';
import HorizontalList from '../../components/HorizontalList';
import Card from '../../components/Card';

const Home = () => {
    //80% of the window's height
    const heroHeight = window.innerHeight * 0.9;
    const backgroundURLs = ['/img/hero-bg-0.jpg', '/img/hero-bg-1.jpg', '/img/hero-bg-2.jpg', '/img/hero-bg-3.jpg'];

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

    return (
        <div>
            <Hero height={heroHeight} backgroundURLs={backgroundURLs} />
            <div className="container" style={{ marginTop: 32, marginBottom: 100 }}>
                <HorizontalList label="Upcoming Events">
                    {events.map(newsItem => {
                        return <Card headline={newsItem.name} body={newsItem.body} img={newsItem.imgSrc} />;
                    })}
                </HorizontalList>
                <HorizontalList label="Community News">
                    {news.map(newsItem => {
                        return <Card headline={newsItem.name} body={newsItem.body} img={newsItem.imgSrc} />;
                    })}
                </HorizontalList>
            </div>
        </div>
    );
};

export default Home;
