import React from 'react';
import './Socials.css';
import { bounceInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const BounceIn = styled.div`animation: 1.5s ${keyframes`${bounceInUp}`}`;

function Socials() {
    return (
        <div className="Socials">
            <BounceIn>
                <a href="https://www.instagram.com/kas_ador/" target="_blank">
                    <i className="fab fa-instagram Icon"></i>
                </a>
                <a href="https://github.com/kasador" target="_blank">
                    <i className="fab fa-github Icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/kasador/" target="_blank">
                    <i className="fab fa-linkedin Icon"></i>
                </a>                    
            </BounceIn>
        </div>  
    );
}

export default Socials;