import React, { Component } from 'react';
import './Portfolio.css';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Me from './images/me.jpeg';

const FadeIn = styled.div`animation: 1s ${keyframes`${fadeInDown}`}`;

class Portfolio extends Component {
    render() {
        return (
            <div>
                <FadeIn>
                    <h1>I'm Steven.</h1>
                </FadeIn>
                <ScrollAnimation animateIn="fadeIn">
                    <p>testtesttesttesttesttesttesttesttesttesttests</p>
                    <p>testtesttesttesttesttesttesttesttesttesttests</p>
                    <p>testtesttesttesttesttesttesttesttesttesttests</p>
                    <img src={Me} alt="picture of me" />
                </ScrollAnimation>
            </div>
        );
    }
}

export default Portfolio;