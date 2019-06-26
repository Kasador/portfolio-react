import React from 'react';
import './Portfolio.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import NavMobile from './components/NavMobile/NavMobile';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

function Portfolio() {
    return (
        <div className="Portfolio">
            <Nav />
            <NavMobile />
            <div className="MainContent">
                <FadeIn>
                    <Intro />
                </FadeIn>
                <ScrollAnimation animateIn="fadeIn">
                    <About />
                    <Projects />
                    <Contact />
                    <Footer />
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default Portfolio;