import React, { useState } from 'react';
import './NavMobile.css';
import { bounceInDown, rotateIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Link } from "react-scroll";

const BounceDown = styled.div`animation: 1.5s ${keyframes`${bounceInDown}`}`;
const RotateIn = styled.div`animation: 0.5s ${keyframes`${rotateIn}`}`;
const RotateInWrapper = styled.div`animation: 1s ${keyframes`${rotateIn}`}`;

function NavMobile() {
    const [open, setOpen] = useState(false);

    const Open = () => {
        setOpen(true);
    }

    const Close = () => {
        setOpen(false);
    }

    return (
        <div className="NavMobile">
            <RotateInWrapper>
                <div className="Plus-Minus">
                    {!open ? <div onClick={() => Open()}><RotateIn><i className="fas fa-plus-circle Plus-MinusSigns"></i></RotateIn></div> : <RotateIn><div><i className="fas fa-minus-circle Plus-MinusSigns" onClick={() => Close()}></i></div></RotateIn>}
                </div>
            </RotateInWrapper>
            {open ? <div className="MobileNavContainer">
                <BounceDown>
                <ul className="NavItemsMobile">
                    <Link
                        onClick={() => Close()}
                        activeClass="activeMobile"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration= {1000}>
                            <div className="NavLinksMobile">
                                <i className="fas fa-tree"></i>
                                Home
                            </div>
                    </Link>
                    <Link
                        onClick={() => Close()}
                        activeClass="activeMobile"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration= {1000} >
                            <div className="NavLinksMobile">
                                <i className="fas fa-address-card"></i>
                                About
                            </div>
                    </Link>
                    <Link
                        onClick={() => Close()}
                        activeClass="activeMobile"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration= {500} >
                            <div className="NavLinksMobile">
                                <i className="fas fa-project-diagram"></i>
                                Projects
                            </div>
                    </Link>
                    <Link
                        onClick={() => Close()}
                        activeClass="activeMobile"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration= {500} >
                            <div className="NavLinksMobile">
                                <i className="fas fa-id-card-alt"></i>
                                Contact
                            </div>
                    </Link>
                </ul>
                </BounceDown>
            </div> : null}
        </div>
    )
}

export default NavMobile;