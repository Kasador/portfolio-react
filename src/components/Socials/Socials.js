import React from 'react';
import './Socials.css';
import { fadeInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeInUp}`}`;

function Socials() {
    return (
        <div className="Socials">
            <FadeIn>
            <i className="fab fa-instagram Icon"></i>
            <i className="fab fa-github Icon"></i>
            <i className="fab fa-linkedin Icon"></i>
            </FadeIn>
        </div>  
    );
}

export default Socials;