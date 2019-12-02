import React from 'react';
import Hero from '../../components/Hero';

import './Join.css';
import Button from '../../components/Button';

const InputText = ({ label, name, placeholder }) => (
    <div className="input-container">
        <label className="label" for={name}>
            {label}
        </label>
        <input className="input-text" type="text" name={name} placeholder={label} />
    </div>
);

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

            <form className="form" action="#">
                <InputText label="Full Name" name="fullname" placeholder="Full Name" />
                <InputText email label="Email" name="email" placeholder="Example@example.com" />
                <InputText email label="Confirm Email" name="emailconfirm" placeholder="Example@example.com" />

                <div className="input-container password-container">
                    <label className="label" for="password">
                        Password
                    </label>
                    <input className="input-text" type="password" name="password" placeholder="Password" />
                    <input className="input-text" type="password" name="passwordconfirm" placeholder="Confirm Password" />
                </div>

                <div className="submit-container">
                    <Button value="Submit" icon="fas fa-arrow-right" bgColor="#00d1b8" title="Sign Up" />
                </div>
            </form>
        </div>
    );
};

export default Join;
