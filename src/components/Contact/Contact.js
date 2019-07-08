import React, { useState } from 'react';
import './Contact.css';
import Forest from '../../images/forest-black-2.png';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';

function Contact() {
    // set state for contact form
    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    // handleChange
    const handleChange = e => {
        setContactInfo({ [e.target.name]: e.target.value })

        console.log(contactInfo);
    }
    // handle submit
    async function handleSubmit(e) {
        e.preventDefault();

        const name = contactInfo.firstName + contactInfo.lastName,
            email = contactInfo.email,
            message = contactInfo.message;
        
        const form = await axios.post('http://localhost:3001/formInfo', {
            name,
            email,
            message
        });
    }

    return (
        <div className="Contact" id="contact">
            <div className="ContactBanner">
                <ScrollAnimation animateIn="fadeIn" duration={1}>
                    <h1 className="ContactHeaders">Contact</h1>
                </ScrollAnimation>
                <img src={Forest} alt="forest art banner" className="ForestBanner2" />
            </div>
            <div className="ContactContent">
                <form className="ContactForm" onSubmit={handleSubmit}>
                    <ScrollAnimation animateIn="fadeIn" duration={1}>
                        <div className="ContactPosition">
                            <div className="ContactInputsWrapper">
                                <input type="text" name="firstName" placeholder="First Name" className="ContactInputs" onChange={handleChange} />
                                <input type="text" name="lastName" placeholder="Last Name" className="ContactInputs" onChange={handleChange} />
                                <input type="email" name="email" placeholder="Email" className="ContactInputs" onChange={handleChange} />
                            </div>
                            <textarea type="text" name="message" placeholder="Message..." id="ContactTextArea" onChange={handleChange} />
                        </div>
                    </ScrollAnimation>
                    <button className="ContactSubmit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;