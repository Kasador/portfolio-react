import React from 'react';
import './Nav.css';
import { bounceInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Link } from "react-scroll";

const BounceLeft = styled.div`animation: 1.5s ${keyframes`${bounceInLeft}`}`;

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
                            <i className="fas fa-tree"></i>
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
        </div>
    )
}

export default Nav;