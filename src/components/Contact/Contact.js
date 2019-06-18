import React from 'react';
import './Contact.css';
import "animate.css/animate.min.css";
import Forest from '../../images/forest-black-2.png';
import Responsive from 'react-responsive';
import ScrollAnimation from 'react-animate-on-scroll';
 
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Desktop1 = props => <Responsive {...props} maxWidth={1100} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

function Contact() {
    return (
        <div className="Contact" id="contact">
            <div className="ContactBanner">
                <ScrollAnimation animateIn="fadeIn" duration={1}>
                    <h1 className="ContactHeaders">Contact</h1>
                </ScrollAnimation>
                <img src={Forest} alt="forest art banner" className="ForestBanner2" />
            </div>
            <div className="ContactContent">
                <form className="ContactForm">
                    <ScrollAnimation animateIn="fadeIn" duration={1}>
                        <div className="ContactPosition">
                            <div className="ContactInputsWrapper">
                                <input type="text" name="firstName" placeholder="First Name" className="ContactInputs" />
                                <input type="text" name="lastName" placeholder="Last Name" className="ContactInputs" />
                                <input type="email" name="email" placeholder="Email" className="ContactInputs" />
                            </div>
                            <textarea type="text" name="message" placeholder="Message..." id="ContactTextArea" />
                        </div>
                    </ScrollAnimation>
                    <button className="ContactSubmit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;