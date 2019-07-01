import React from 'react';
import './Contact.css';
import "animate.css/animate.min.css";
import Forest from '../../images/forest-black-2.png';
import ScrollAnimation from 'react-animate-on-scroll';

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
                <form className="ContactForm" action="./mail.php" method="POST">
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