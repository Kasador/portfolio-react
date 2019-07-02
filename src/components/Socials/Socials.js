import React from 'react';
import './Socials.css';
import { bounceInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const BounceIn = styled.div`animation: 1.5s ${keyframes`${bounceInUp}`}`;

function Socials() {
    return (
        <div className="Socials">
            <BounceIn>
                <i className="fab fa-instagram Icon"></i>
                <i className="fab fa-github Icon"></i>
                <i className="fab fa-linkedin Icon"></i>
            </BounceIn>
        </div>  
    );
}

export default Socials;