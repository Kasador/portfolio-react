import React, { useState } from 'react';
import './Intro.css';
import "animate.css/animate.min.css";
import Me from '../../images/me.jpeg';
import Typewriter from 'typewriter-effect';
import Socials from '../Socials/Socials';
import { bounceInUp, bounceInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const FadeIn = styled.div`animation: 1.5s ${keyframes`${bounceInUp}`}`;
const BounceIn = styled.div`animation: 1.5s ${keyframes`${bounceInDown}`}`;

function Intro() {
    return (
        <div className="Intro">
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
                <div className="CallToAction">
                    <span>See What I Do</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </FadeIn>
            </div>
        </div>
    );
}

export default Intro;