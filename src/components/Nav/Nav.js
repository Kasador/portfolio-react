import React from 'react';
import './Nav.css';
import { fadeInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeInLeft}`}`;

function Nav() {
    return (
        <div className="Nav">
            <FadeIn>
            <ul className="NavItems">
                <li>
                    <i class="fas fa-home"></i>
                    Home
                </li>
                <li>
                    <i class="fas fa-address-card"></i>
                    About
                </li>
                <li>
                    <i class="fas fa-project-diagram"></i>
                    Projects
                </li>
                <li>
                    <i class="fas fa-id-card-alt"></i>
                    Contact
                </li>
            </ul>
            </FadeIn>
        </div>
    )
}

export default Nav;