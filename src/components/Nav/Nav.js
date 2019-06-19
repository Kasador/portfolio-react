import React from 'react';
import './Nav.css';
import { bounceInLeft, fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import Usa from '../../images/usa.png';
import Spain from '../../images/spain.png';
import { Link } from "react-scroll";

const BounceLeft = styled.div`animation: 1.5s ${keyframes`${bounceInLeft}`}`;
const FadeIn = styled.div`animation: 2.3s ${keyframes`${fadeIn}`}`;

function Nav() {
    return (
        <div className="Nav">
            <BounceLeft>
            <ul className="NavItems">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration= {1000}>
                        <div className="NavLinks">
                            <i class="fas fa-tree"></i>
                            Home
                        </div>
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration= {1000} >
                        <div className="NavLinks">
                            <i className="fas fa-address-card"></i>
                            About
                        </div>
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration= {500} >
                        <div className="NavLinks">
                            <i className="fas fa-project-diagram"></i>
                            Projects
                        </div>
                </Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration= {500} >
                        <div className="NavLinks">
                            <i className="fas fa-id-card-alt"></i>
                            Contact
                        </div>
                </Link>
            </ul>
            </BounceLeft>
            <FadeIn>
            <div className="LanguagesPosition">
                <div className="LanguagesWrapper">
                    <div className="Languages">
                        <img src={Usa} alt="USA flag" />
                        <span>English</span>
                    </div>
                    <div className="Languages">
                        <img src={Spain} alt="USA flag" />
                        <span>Spanish</span>
                    </div>
                </div>
            </div>
            </FadeIn>
        </div>
    )
}

export default Nav;