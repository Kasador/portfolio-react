import React, { useState } from 'react';
import './About.css';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import "animate.css/animate.min.css";
import Forest from '../../images/forest-black.png';
import ScrollAnimation from 'react-animate-on-scroll';
import Coffee from '../../images/coffee.png';
import Idaho from '../../images/idaho.png'
import Hola from '../../images/hola.png';

const FadeInDown = styled.div`animation: 2s ${keyframes`${fadeInDown}`}`;

function About() {
    return (
        <div className="About">
        <ScrollAnimation animateIn="fadeIn" duration="1.5">
            <img src={Forest} alt="forest art banner" className="ForestBanner" />
            <div className="AboutContent">
                <ScrollAnimation animateIn='bounceInLeft' duration="2">
                <div className="AboutPictures">
                    <img src={Idaho} alt="coffee cup with the text coder inside" className="AboutIcons"/>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInLeft' duration="1.8">
                <div className="AboutText">
                    <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</p>
                    <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</p>
                    <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</p>
                </div>
                </ScrollAnimation>
            </div>
            <div className="AboutContent">
            <ScrollAnimation animateIn='bounceInLeft' duration="1.8">
                <div className="AboutText">
                    <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</p>
                    <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</p>
                    <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInRight' duration="1.8">
                <div className="AboutPictures">
                    <img src={Coffee} alt="coffee cup with the text coder inside" className="AboutIcons"/>
                </div>
            </ScrollAnimation>
            </div>
            
            <div className="AboutContent">
            <ScrollAnimation animateIn='bounceInLeft' duration="2">
                <div className="AboutPictures">
                    <img src={Hola} alt="coffee cup with the text coder inside" className="AboutIcons"/>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInRight' duration="1.8">
                <div className="AboutText">
                    <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</p>
                    <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</p>
                    <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</p>
                </div>
                </ScrollAnimation>
            </div>
            </ScrollAnimation>
        </div>
    );
}

export default About;