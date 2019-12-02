import React from 'react';
import { InputText } from '../../pages/Join';
import Button from '../Button';

import './DonateSection.css';

const DonateSection = ({ invert }) => {
    const textColor = invert ? 'white' : 'black';
    return (
        <section className="donate-section" style={{ color: textColor }} inverted={invert ? 'true' : 'false'}>
            <form className="form">
                <InputText label="Full Name" name="fullname" placeholder="Full Name" />
                <InputText email label="Email" name="email" placeholder="Example@example.com" />
                <InputText email label="Confirm Email" name="emailconfirm" placeholder="Example@example.com" />
                <div className="input-container donate-amount-container">
                    <label className="label" for="donate-amount">
                        Donation Amount
                    </label>
                    <div className="flex-between">
                        <span className="donate-dollar" title="USD">
                            $
                        </span>
                        <input className="input-text" type="number" name="donate-amount" min="0" />
                        <span className="donate-cents">.00</span>
                    </div>
                </div>
                <div className="submit-container">
                    <Button value="Submit" icon="fas fa-arrow-right" bgColor={invert ? '#3142b0' : '#00d1b8'} title="Send Donation" />
                </div>
            </form>
        </section>
    );
};

export default DonateSection;
