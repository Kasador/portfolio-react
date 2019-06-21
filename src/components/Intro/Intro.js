import React, { useState } from 'react';
import './Intro.css';
import "animate.css/animate.min.css";
import Me from '../../images/me_cartoon.jpg';
import Typewriter from 'typewriter-effect';
import Socials from '../Socials/Socials';
import { bounceInUp, bounceInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

const FadeIn = styled.div`animation: 1.5s ${keyframes`${bounceInUp}`}`;
const BounceIn = styled.div`animation: 1.5s ${keyframes`${bounceInDown}`}`;

function Intro() {
    return (
        <div className="Intro" id="home">
            <div className="IntroWrapper">
                <BounceIn>
                <img src={Me} alt="picture of me" className="Me" />
                </BounceIn>
                <div className="TypeEffect">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Hello...')
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("I'm Steven.")
                            .start();
                        }}
                        />
                </div>
                <Socials />
            </div>
            <div className="CallToActionWrapper">
            <FadeIn>
                <Link 
                    className="NavLinksIntro"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration= {1000} >
                        <div className="CallToAction">
                            <span>See What I Do</span>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                </Link>
            </FadeIn>
            </div>
        </div>
    );
}

export default Intro;