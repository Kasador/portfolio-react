import React, { useState, useEffect } from 'react';
import './Contact.css';
import Forest from '../../images/forest-black-2.png';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';
import Sending from '../../images/sending.gif';

function Contact() {
    // set state for contact form
    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        isSending: true,
        isEmpty: true
    });

    // handleChange and update value
    const handleChange = (e) => {
        setContactInfo({...contactInfo, [e.target.name]: e.target.value});
    }

    const handleClearData = () => {
        setTimeout(() => {
            setContactInfo({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            })
            
            console.log('ClearData function went off.');
            console.log(contactInfo);
        }, 2000);
    }

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // store info
        const name = `${contactInfo.firstName} ${contactInfo.lastName}`,
        email = contactInfo.email,
        message = contactInfo.message;
        
        // submit info to be send
        const form = await axios.post('http://localhost:5000/form-info', {
            name,
            email,
            message
        });
    }

    // check if any fields are empty
    useEffect(() => {
        if (
            contactInfo.firstName === '' ||
            contactInfo.lastName === '' ||
            contactInfo.email === '' ||
            contactInfo.message === '' ) {
                setContactInfo({...contactInfo, isEmpty: true});
        } else {
            setContactInfo({...contactInfo, isEmpty: false});
        }
    });

    return (
        <div className="Contact" id="contact">
            <div className="ContactBanner">
                <ScrollAnimation animateIn="fadeIn" duration={1}>
                    <h1 className="ContactHeaders">Contact</h1>
                </ScrollAnimation>
                <img src={Forest} alt="forest art banner" className="ForestBanner2" />
            </div>
            {contactInfo.isSending ? <img src={Sending} alt="Sending Spinner" className="Sending" /> : null}
            <div className="ContactContent">
                <form className="ContactForm" onSubmit={handleSubmit}>
                    <ScrollAnimation animateIn="fadeIn" duration={1}>
                        <div className="ContactPosition">
                            <div className="ContactInputsWrapper">
                                <input type="text" name="firstName" placeholder="First Name" className="ContactInputs" onChange={handleChange} value={contactInfo.firstName} />
                                <input type="text" name="lastName" placeholder="Last Name" className="ContactInputs" onChange={handleChange} value={contactInfo.lastName} />
                                <input type="email" name="email" placeholder="Email" className="ContactInputs" onChange={handleChange} value={contactInfo.email} />
                            </div>
                            <textarea type="text" name="message" placeholder="Message..." id="ContactTextArea" onChange={handleChange} value={contactInfo.message} />
                        </div>
                    </ScrollAnimation>
                    <button className="ContactSubmit" type="submit" onClick={handleClearData} disabled={contactInfo.isEmpty}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;