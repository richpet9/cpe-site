import React from 'react';
import Hero from '../../components/Hero';
import DonateSection from '../../components/DonateSection';

const Donate = () => {
    return (
        <section className="donate-page" style={{ textAlign: 'center', fontSize: '1rem' }}>
            <Hero
                height={400}
                backgroundURLs={'../img/donate-header.jpg'}
                leftChild={
                    <div className="big-text" style={{ textAlign: 'center' }}>
                        Donate Today
                    </div>
                }
                rightChild={null}
            />
            <h1 style={{ paddingTop: '64px' }}>Help Support Your Community</h1>
            <DonateSection />
        </section>
    );
};

export default Donate;
