import React from 'react';
import './Projects.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Forest from '../../images/forest-black-1.png';
import LascarProductions from '../../images/lascarproductions.png';
import MySpanishSlang from '../../images/myspanishslang.png';
import DTailDoctor from '../../images/dtaildoctor.png';
import MySQL from '../../images/mysql.png';
import WarBonnet from '../../images/warbonnet.png';

function Projects() {
    return (
        <div className="Projects" id="projects">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={1}>
            <div className="ProjectsBanner">
                <h1 className="ProjectsHeaders">Projects</h1>
                <img src={Forest} alt="mountain art banner" className="ForestOneBanner" />
            </div>
            <div className="ProjectsContent">
                {/* MySpanishSlang */}
                <div className="ProjectsInfo">
                    <ScrollAnimation animateIn='bounceInRight' duration={1.8}>
                    <h1 className="ProjectsTitles Left">MySpanishSlang</h1>
                        <div className="ProjectsCard">
                        <a href="https://hunterstevenshaw.com/projects/mySpanishSlang/index.html" target="_blank" className="ImagesLinks"><img src={MySpanishSlang} alt="test" className="ProjectsImages" /></a>
                            <a href="https://hunterstevenshaw.com/projects/mySpanishSlang/index.html" target="_blank"><button className="ProjectsBtns">Live Link <i className="fas fa-link"></i></button></a>
                            <a href="https://github.com/Kasador/my-spanish-slang" target="_blank"><button className="ProjectsBtns">GitHub Link <i className="fab fa-github-alt"></i></button></a>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight' duration={2.0}>
                        <div className="ProjectsTextWrapper">
                            <p className="ProjectsText">This is my very first website I've built. I like to keep it unchanged to remind myself how far I've come since then. If I ever feel down about my coding skills, I'll come back to this &#x00026; look at it.</p>
                            <p className="ProjectsText">Originally, it was a website made for Spanish slang. It consists of mostly HTML5 &#x00026; CSS3; however, I did figure out a contact form without knowing php at that time.</p>
                            <span class="TechHeader">Technologies used:</span>
                            <div className="TechUsed">
                                <i className="fab fa-html5 TechIcons html"></i>
                                <i className="fab fa-css3-alt TechIcons css"></i>
                                <i className="fab fa-js-square TechIcons javascript"></i>
                                <i className="fab fa-php TechIcons php"></i>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
                {/* D-tail Doctor */}
                <div className="ProjectsInfo">
                <ScrollAnimation animateIn='bounceInLeft' duration={1.8} className="OrderBot">
                    <div className="ProjectsTextWrapper">
                        <p className="ProjectsText">This is the first client work I took &#x00026; the first time I got paid for coding something. Really, this was the first real poject This was the beginning of understanding &#x00026; working with clients. Which is a whole other skill by itself.</p>
                        <p className="ProjectsText">The website is made for a detailing company which provides a whole bunch of services. This project pushed me even further with Javascript.</p>
                        <span class="TechHeader">Technologies used:</span>
                        <div className="TechUsed">
                            <i className="fab fa-html5 TechIcons html"></i>
                            <i className="fab fa-css3-alt TechIcons css"></i>
                            <i className="fab fa-js-square TechIcons javascript"></i>
                            <i className="fab fa-php TechIcons php"></i>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' duration={2} className="OrderTop">
                <h1 className="ProjectsTitles Right">D-tail Doctor</h1>
                    <div className="ProjectsCard">
                        <a href="http://dtaildoc.com/" target="_blank" className="ImagesLinks"><img src={DTailDoctor} alt="test" className="ProjectsImages" /></a>
                        <a href="http://dtaildoc.com/" target="_blank"><button className="ProjectsBtns">Live Link <i className="fas fa-link"></i></button></a>
                        <a href="https://github.com/Kasador/d-tail-doctor" target="_blank"><button className="ProjectsBtns">GitHub Link <i className="fab fa-github-alt"></i></button></a>
                    </div>
                </ScrollAnimation>
                </div>
                {/* Lascar Productions */}
                <div className="ProjectsInfo">
                    <ScrollAnimation animateIn='bounceInLeft' duration={2}>
                    <h1 className="ProjectsTitles Left">Lascar Productions</h1>
                        <div className="ProjectsCard">
                            <a href="https://www.lascarproductions.com/" target="_blank" className="ImagesLinks"><img src={LascarProductions} alt="test" className="ProjectsImages" /></a>
                            <a href="https://www.lascarproductions.com/" target="_blank"><button className="ProjectsBtns">Live Link <i className="fas fa-link"></i></button></a>
                            <a href="https://github.com/Kasador/lascar-productions" target="_blank"><button className="ProjectsBtns">GitHub Link <i className="fab fa-github-alt"></i></button></a>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight' duration={2.4}>
                        <div className="ProjectsTextWrapper">
                            <p className="ProjectsText">Another client website; I made this for a newer productions company. They wanted something simple &#x00026; modern. I believe I delieved just that. It was very fun to code &#x00026; I really love the menu on this one.</p>
                            <p className="ProjectsText">I build this using some HTML5, CSS3, ES6, php, &#x00026; MySQL for a simple database that they wanted. Made issue I had was video background, I compressed as best as possible.</p>
                            <span class="TechHeader">Technologies used:</span>
                            <div className="TechUsed">
                                <i className="fab fa-html5 TechIcons html"></i>
                                <i className="fab fa-css3-alt TechIcons css"></i>
                                <i className="fab fa-js-square TechIcons javascript"></i>
                                <i className="fab fa-php TechIcons php"></i>
                                <img src={MySQL} alt="mysql" className="NoFontIcon" />
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
                {/* Lascar Productions */}
                <div className="ProjectsInfo">
                <ScrollAnimation animateIn='bounceInLeft' duration={1.8} className="OrderBot">
                    <div className="ProjectsTextWrapper">
                        <p className="ProjectsText">This is the first client work I took &#x00026; the first time I got paid for coding something. Really, this was the first real poject This was the beginning of understanding &#x00026; working with clients. Which is a whole other skill by itself.</p>
                        <p className="ProjectsText">The website is made for a detailing company which provides a whole bunch of services. This project pushed me even further with Javascript.</p>
                        <span class="TechHeader">Technologies used:</span>
                        <div className="TechUsed">
                            <i className="fab fa-html5 TechIcons html"></i>
                            <i className="fab fa-css3-alt TechIcons css"></i>
                            <i className="fab fa-js-square TechIcons javascript"></i>
                            <i className="fab fa-php TechIcons php"></i>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' duration={2} className="OrderTop">
                <h1 className="ProjectsTitles Right">D-tail Doctor</h1>
                    <div className="ProjectsCard">
                        <a href="http://dtaildoc.com/" target="_blank" className="ImagesLinks"><img src={DTailDoctor} alt="test" className="ProjectsImages" /></a>
                        <a href="http://dtaildoc.com/" target="_blank"><button className="ProjectsBtns">Live Link <i className="fas fa-link"></i></button></a>
                        <a href="https://github.com/Kasador/d-tail-doctor" target="_blank"><button className="ProjectsBtns">GitHub Link <i className="fab fa-github-alt"></i></button></a>
                    </div>
                </ScrollAnimation>
                </div>
                <div className="ProjectsInfo">
                    <ScrollAnimation animateIn='bounceInLeft' duration={2}>
                    <h1 className="ProjectsTitles Left">Lascar Productions</h1>
                        <div className="ProjectsCard">
                            <a href="https://www.lascarproductions.com/" target="_blank" className="ImagesLinks"><img src={LascarProductions} alt="test" className="ProjectsImages" /></a>
                            <a href="https://www.lascarproductions.com/" target="_blank"><button className="ProjectsBtns">Live Link <i className="fas fa-link"></i></button></a>
                            <a href="https://github.com/Kasador/lascar-productions" target="_blank"><button className="ProjectsBtns">GitHub Link <i className="fab fa-github-alt"></i></button></a>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight' duration={2.4}>
                        <div className="ProjectsTextWrapper">
                            <p className="ProjectsText">Another client website; I made this for a newer productions company. They wanted something simple &#x00026; modern. I believe I delieved just that. It was very fun to code &#x00026; I really love the menu on this one.</p>
                            <p className="ProjectsText">I build this using some HTML5, CSS3, ES6, php, &#x00026; MySQL for a simple database that they wanted. Made issue I had was video background, I compressed as best as possible.</p>
                            <span class="TechHeader">Technologies used:</span>
                            <div className="TechUsed">
                                <i className="fab fa-html5 TechIcons html"></i>
                                <i className="fab fa-css3-alt TechIcons css"></i>
                                <i className="fab fa-js-square TechIcons javascript"></i>
                                <i className="fab fa-php TechIcons php"></i>
                                <img src={MySQL} alt="mysql" className="NoFontIcon" />
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div> 
        </ScrollAnimation>
        </div>
    );
}

export default Projects;