import React, { useState } from 'react';
import './Portfolio.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

function Portfolio() {
    return (
        <div className="Portfolio">
            <Nav />
            <div className="MainContent">
                <FadeIn>
                    <Intro />
                </FadeIn>
                <ScrollAnimation animateIn="fadeIn">
                    <About />
                    <Projects />
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default Portfolio;