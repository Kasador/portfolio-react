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
        isSending: false,
        isEmpty: true
    });

    // handleChange and update value
    const handleChange = (e) => {
        setContactInfo({...contactInfo, [e.target.name]: e.target.value});
    }

    // clear input fields on submit
    const handleClearData = () => {
        setContactInfo({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            isSending: false,
            isEmpty: false
        });

        console.log('Clear function went off!');
    }

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // on submit, slow sending spinner
        setContactInfo({...contactInfo, isSending: true});
        // store info
        const name = `${contactInfo.firstName} ${contactInfo.lastName}`,
            email = contactInfo.email,
            message = contactInfo.message;
        
        console.log('...before the await');

        // submit info to be sent
        const res = await axios.post('http://localhost:5000/form-info', {
            name,
            email,
            message
        }).then((response) => {
            console.log(response.status);
        }).catch((error) => {
            console.log('You got an error: ' + error);
        }).finally(() => {
            console.log('I believe this always runs!');
        });
        
        setContactInfo({...contactInfo, isSending: false});
        // handleClearData();
        console.log('...after the await');
    }

    // check if any fields are empty
    useEffect(() => {
        if (
            (contactInfo.firstName === '' ||
            contactInfo.lastName === '' ||
            contactInfo.email === '' ||
            contactInfo.message === '') || contactInfo.isSending) {
                setContactInfo({...contactInfo, isEmpty: true});
        } else {
            setContactInfo({...contactInfo, isEmpty: false});
        }
    }, [contactInfo]);

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
                    <button className="ContactSubmit" type="submit" disabled={contactInfo.isEmpty}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;