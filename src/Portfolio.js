import React, { useState } from 'react';
import './Portfolio.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';

const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`}`;

function Portfolio() {
    return (
        <div className="Portfolio">
            <Nav />
            <div className="MainContent">
                <FadeIn>
                    <Intro />
                </FadeIn>
                {/* <ScrollAnimation animateIn="fadeIn">
                </ScrollAnimation> */}
            </div>
        </div>
    );
}

export default Portfolio;