import React, { useState } from 'react';
import './Intro.css';
import "animate.css/animate.min.css";
import Me from '../../images/me.jpeg';
import Typewriter from 'typewriter-effect';
import Socials from '../Socials/Socials';

function Intro() {
    return (
        <div className="Intro">
            <div className="IntroWrapper">
                <img src={Me} alt="picture of me" className="Me" />
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
        </div>
    );
}

export default Intro;