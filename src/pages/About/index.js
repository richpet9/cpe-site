import React from 'react';
import Hero from '../../components/Hero';
import TextSection from '../../components/TextSection';

const About = props => {
    return (
        <div>
            <Hero height={400} backgroundURLs={'../img/about-header.jpg'} leftChild={<div className="big-text">About Community</div>} rightChild={null} />
            <section className="container" style={{ marginTop: 32, marginBottom: 100 }}>
                <TextSection
                    title="A Little History"
                    text={
                        <p>
                            In 1988, Vin Sansone started working on the dream he had since he was a boy. Vin’s dream was to own a gym and that is exactly what he did.
                            Grabbing his family and friends as supporters, Community Programming & Events started coming to life. By empowering young people to reach
                            their full potential, improving individual and community well-being and giving back and inspiring action in our communities, Community
                            Programming & Events ensures that everyone has the opportunity to become healthier, more confident, connected and secure.
                        </p>
                    }
                    img={null}
                />

                <TextSection
                    title="Reach Out"
                    text={
                        <p>
                            In 1988, Vin Sansone started working on the dream he had since he was a boy. Vin’s dream was to own a gym and that is exactly what he did.
                            Grabbing his family and friends as supporters, Community Programming & Events started coming to life. By empowering young people to reach
                            their full potential, improving individual and community well-being and giving back and inspiring action in our communities, Community
                            Programming & Events ensures that everyone has the opportunity to become healthier, more confident, connected and secure.
                        </p>
                    }
                    img={null}
                />

                <TextSection
                    title="Give Us a Hand"
                    text={
                        <p>
                            In 1988, Vin Sansone started working on the dream he had since he was a boy. Vin’s dream was to own a gym and that is exactly what he did.
                            Grabbing his family and friends as supporters, Community Programming & Events started coming to life. By empowering young people to reach
                            their full potential, improving individual and community well-being and giving back and inspiring action in our communities, Community
                            Programming & Events ensures that everyone has the opportunity to become healthier, more confident, connected and secure.
                        </p>
                    }
                    img={null}
                />
            </section>
        </div>
    );
};

export default About;
