import React from 'react';
import './Projects.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Forest from '../../images/forest-black-1.png';
import Responsive from 'react-responsive';
 
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Desktop1 = props => <Responsive {...props} maxWidth={1100} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

function About() {
    return (
        <Desktop>
        <div className="Projects">
        <ScrollAnimation animateIn="fadeIn" duration={1}>
            <div className="ProjectsBanner">
                <h1 className="ProjectsHeaders">About</h1>
                <img src={Forest} alt="mountain art banner" className="ForestOneBanner" />
            </div>
        </ScrollAnimation>
        </div>
        </Desktop>
    );
}

export default About;