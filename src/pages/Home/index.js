import React from 'react';
import Hero from '../../components/Hero';
import HorizontalList from '../../components/HorizontalList';
import Card from '../../components/Card';
import Button from '../../components/Button';
import DonateSection from '../../components/DonateSection';
import Donate from '../Donate';

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
            imgSrc: '/img/news/0.jpg'
        },
        {
            name: 'Check out this Headline!',
            body:
                'Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempororci nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.',
            imgSrc: '/img/news/1.jpg'
        },
        {
            name: 'Check out this Headline!',
            body:
                'Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempororci nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.',
            imgSrc: '/img/news/2.jpg'
        },
        {
            name: 'Check out this Headline!',
            body:
                'Community Programming and Events relies heavily on outside help to support our initiatives. Lorem ipsum dolor set Morbi sed arcu convallis, tempororci nec, sagittis diam. Duis sem est, tristique a metus id, sagittis convallis lacus.',
            imgSrc: '/img/news/3.jpg'
        }
    ];

    //This would also be database data
    const events = [
        {
            name: 'Food and Toy Drive',
            body:
                'Every Sunday in December, from 9 a.m. - 5 p.m., come on down to the CPE and donate a non-perishable food, an unwrapped toy or both! All donations go to the less fortunate during this holiday season.',
            imgSrc: '/img/events/0.jpg'
        },
        {
            name: 'Cookies for a Cause',
            body:
                'On December 14th, from 3 p.m. - 7 p.m., come and enjoy cookie making and hot chocolate with your neighbors. For every cookie made the CPE will donate $3 dollars to the Children’s Cancer Foundation.',
            imgSrc: '/img/events/1.jpg'
        },
        {
            name: 'Life Skills Saves Lives',
            body:
                'Become a certified lifeguard if you’re 15 or older and looking for a great part-time job or a challenging career, that’s in demand, the American Red Cross Lifeguarding Program is one of the best places to start. Learning is fun and easy! Through videos, group discussion, and hands-on practice.',
            imgSrc: '/img/events/2.jpg'
        },
        {
            name: 'CPE Winter Day Camp',
            body:
                'At the CPE Winter Day Camp, participants gain a sense of accomplishment, build relationships and find their sense of belonging. It’s an opportunity for physical, social, emotional and cognitive learning experiences. For families, the camp offers a peace of mind knowing that your child is in a safe and enriching place. We can’t wait to see you at Hamden/North Haven CPE Camp Mountain!',
            imgSrc: '/img/events/3.jpg'
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
            <section className="container" style={{ marginTop: 32 }}>
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
            <section style={{ paddingTop: '32px', backgroundColor: '#00d1b8', textAlign: 'center', color: 'white' }}>
                <h1>Donate today to support your Community</h1>
                <DonateSection invert={true} />
            </section>
        </div>
    );
};

export default Home;
