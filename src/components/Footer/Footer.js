import React, { useState } from 'react';
import './Footer.css';
import "animate.css/animate.min.css";
import FooterImg from '../../images/footer.png';
import { get } from 'https';

function Footer() {
    return (
        <div className="Footer">
            <img src={FooterImg} alt="footer banner" className="FooterBanner" />
            <span className="FooterText"> Copyright &copy; {new Date().getFullYear()} | H. Steven Shaw</span>
        </div>
    );
}

export default Footer;