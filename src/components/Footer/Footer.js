import React from 'react';
import './Footer.css';
import FooterImg from '../../images/footer.png';
import BackTop from '../BackTop/BackTop';

function Footer() {
    return (
        <div className="Footer">
            <BackTop />
            <img src={FooterImg} alt="footer banner" className="FooterBanner" />
            <span className="FooterText"> Copyright &copy; {new Date().getFullYear()} | Hunter S. Shaw</span>
        </div>
    );
}

export default Footer;