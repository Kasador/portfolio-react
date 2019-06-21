import React from 'react';
import './Projects.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Forest from '../../images/forest-black-1.png';
import Test from '../../images/test.png';

function Projects() {
    return (
        <div className="Projects" id="projects">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={1}>
            <div className="ProjectsBanner">
                <h1 className="ProjectsHeaders">Projects</h1>
                <img src={Forest} alt="mountain art banner" className="ForestOneBanner" />
            </div>
            <div className="ProjectsContent">
                <div className="ProjectsInfo">
                    <ScrollAnimation animateIn='bounceInRight' duration={2}>
                    <h1 className="ProjectsTitlesLeft">Test</h1>
                        <div className="ProjectsCard">
                            <img src={Test} alt="test image" className="ProjectsImages" />
                            <button className="ProjectsBtns">Live Link <i class="fas fa-link"></i></button>
                            <button className="ProjectsBtns">GitHub Link <i class="fab fa-github-alt"></i></button>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight' duration={1.8}>
                        <div className="ProjectsTextWrapper">
                            <p className="ProjectsText">test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                            <p className="ProjectsText">test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                            <p className="ProjectsText">test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="ProjectsContent">
                <div className="ProjectsInfo">
                <ScrollAnimation animateIn='bounceInLeft' duration={1.8}>
                    <div className="ProjectsTextWrapper">
                        <p className="ProjectsText">test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                        <p className="ProjectsText">test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                        <p className="ProjectsText">test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' duration={2}>
                <h1 className="ProjectsTitlesRight">Test</h1>
                    <div className="ProjectsCard">
                        <img src={Test} alt="test image" className="ProjectsImages" />
                        <button className="ProjectsBtns">Live Link <i class="fas fa-link"></i></button>
                        <button className="ProjectsBtns">GitHub Link <i class="fab fa-github-alt"></i></button>
                    </div>
                </ScrollAnimation>
                </div>
            </div>
            <div className="ProjectsContent">
                <div className="ProjectsInfo">
                    <ScrollAnimation animateIn='bounceInLeft' duration={2}>
                    <h1 className="ProjectsTitlesLeft">Test</h1>
                        <div className="ProjectsCard">
                            <img src={Test} alt="test image" className="ProjectsImages" />
                            <button className="ProjectsBtns">Live Link <i class="fas fa-link"></i></button>
                            <button className="ProjectsBtns">GitHub Link <i class="fab fa-github-alt"></i></button>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight' duration={2.4}>
                        <div className="ProjectsTextWrapper">
                            <p className="ProjectsText">test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                            <p className="ProjectsText">test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                            <p className="ProjectsText">test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </ScrollAnimation>
        </div>
    );
}

export default Projects;