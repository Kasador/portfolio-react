import React from 'react';
import './BackTop.css';
import { Link } from "react-scroll";

function Projects() {   
    return (
        <div className="BackTop">
            <Link
                className="BackToTop"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-40}
                duration= {1000} >
                    <i className="fas fa-chevron-circle-up"></i>
            </Link>
            <div className="BackTopSocials">
                <a href="https://www.instagram.com/kas_ador/" target="_blank">
                    <i className="fab fa-instagram BackTopIcon BT1"></i>
                </a>
                <a href="https://github.com/kasador" target="_blank">
                    <i className="fab fa-github BackTopIcon BT2"></i>
                </a>
                <a href="https://www.linkedin.com/in/kasador/" target="_blank">
                    <i className="fab fa-linkedin BackTopIcon BT3"></i>
                </a>
            </div>
        </div>
    );
}

export default Projects;