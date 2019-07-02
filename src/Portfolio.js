import React from 'react';
import './Portfolio.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import "animate.css/animate.min.css";
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import NavMobile from './components/NavMobile/NavMobile';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function Portfolio() {
    return (
        <div className="Portfolio">
            <Nav />
            <NavMobile />
            <div className="MainContent">
                <Intro />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default Portfolio;