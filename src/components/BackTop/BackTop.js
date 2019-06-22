import React from 'react';
import './BackTop.css';
import "animate.css/animate.min.css";
import { Link, animateScroll as scroll } from "react-scroll";


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
                        <i class="fas fa-chevron-circle-up"></i>
                </Link>
                <div className="BackTopSocials">
                    <i className="fab fa-instagram BackTopIcon BT1"></i>
                    <i className="fab fa-github BackTopIcon BT2"></i>
                    <i className="fab fa-linkedin BackTopIcon BT3"></i>
                </div>
        </div>
    );
}

export default Projects;