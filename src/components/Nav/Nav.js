import React from 'react';
import './Nav.css';
import { bounceInLeft, fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import Usa from '../../images/usa.png';
import Spain from '../../images/spain.png'

const BouceLeft = styled.div`animation: 1.5s ${keyframes`${bounceInLeft}`}`;
const FadeIn = styled.div`animation: 2.3s ${keyframes`${fadeIn}`}`;

function Nav() {
    return (
        <div className="Nav">
            <BouceLeft>
            <ul className="NavItems">
                <li>
                    <i className="fas fa-home"></i>
                    Home
                </li>
                <li>
                    <i className="fas fa-address-card"></i>
                    About
                </li>
                <li>
                    <i className="fas fa-project-diagram"></i>
                    Projects
                </li>
                <li>
                    <i className="fas fa-id-card-alt"></i>
                    Contact
                </li>
            </ul>
            </BouceLeft>
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