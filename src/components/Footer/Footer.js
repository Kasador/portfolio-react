import React, { useState } from 'react';
import './Footer.css';
import "animate.css/animate.min.css";
import FooterImg from '../../images/footer.png';
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
    return (
        <div className="Footer">
            <Link   
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-40}
                duration= {1000} >
                    <i className="fas fa-chevron-up BackToTop"></i>
            </Link>
            <img src={FooterImg} alt="footer banner" className="FooterBanner" />
            <span className="FooterText"> Copyright &copy; {new Date().getFullYear()} | H. Steven Shaw</span>
        </div>
    );
}

export default Footer;