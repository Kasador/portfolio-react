import React from 'react';
import './About.css';
import "animate.css/animate.min.css";
import Forest from '../../images/forest-black.png';
import ScrollAnimation from 'react-animate-on-scroll';
import Coffee from '../../images/coffee.png';
import Idaho from '../../images/idaho.png'
import Hola from '../../images/hola.png';

function About() {
    return (
        <div className="About" id="about">
        <ScrollAnimation animateIn="fadeIn" duration={1}>
            <div className="AboutBanner">
                <h1 className="AboutHeaders">About</h1>
                <img src={Forest} alt="forest art banner" className="ForestBanner" />
            </div>
            <div className="AboutContent">
                <ScrollAnimation animateIn='bounceInLeft' duration={2}>
                <div className="AboutPictures">
                    <img src={Idaho} alt="coffee cup with the text coder inside" className="AboutIcons"/>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInLeft' duration={1.8}>
                <div className="AboutText">
                    <p>I'm Steven and I'm from Idaho, where we power our computers with potatoes.</p>
                    <p>I first discovered web development back in high school. This is where I entered a <dfn title="Business Professionals of America">BPA</dfn> competition in the 10th grade for "Web Design" and got second place in state, without knowing a thing other than some Photoshop and HTML.</p>
                    <p>I remember spending hours on that website in high school, and after graduation I went and traveled all around Latin America, then went back to get an Associates Degree in Web Development.</p>
                </div>
                </ScrollAnimation>
            </div>
            <div className="AboutContent">
            <ScrollAnimation animateIn='bounceInLeft' duration={1.8} className="FixToTopText">
                <div className="AboutText">
                    <p>When I lived in Costa Rica, my host family's house was located behind a coffee plantation. Where I truly got to understand the way of a good cup of coffee and it's sufficient value.</p>
                    <p>I love to code and I love to drink coffee while doing it. A relaxing cup of coffee is important in my life.</p>
                    <p>I love to solve problems. PERIOD. I really believe this is the main reason why I love and enjoy web development. Coding to me means more than just memorization of syntax, it allows me to think logically, which has changed my life for the better.</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInRight' duration={2} className="FixToTopIcon">
                <div className="AboutPictures">
                    <img src={Coffee} alt="coffee cup with the text coder inside" className="AboutIcons"/>
                </div>
            </ScrollAnimation>
            </div>
            
            <div className="AboutContent">
            <ScrollAnimation animateIn='bounceInLeft' duration={2}>
                <div className="AboutPictures">
                    <img src={Hola} alt="coffee cup with the text coder inside" className="AboutIcons"/>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInRight' duration={1.8}>
                <div className="AboutText">
                    <p>Spanish has really taught me to appericate and respect the learning process. Not only did I learn to love languages and how lauguages truly function, but it has allowed me to understand the process of web development as well.</p>
                    <p>When I'm faced with a new language or framework to learn, Spanish has taught me to be patient while learning. I'm a professionist at heart and because of this, I often never feel satistifed with just doing the bare minimum.</p>
                    <p>I take pride in my work and never understand the people who development an unenjoyable user experience.</p>
                </div>
                </ScrollAnimation>
            </div>
            </ScrollAnimation>
        </div>
    );
}

export default About;