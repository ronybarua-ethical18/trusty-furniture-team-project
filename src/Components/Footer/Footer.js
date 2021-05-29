import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="w-100 p-5 text-center">
            <div className="social-contacts text-center d-flex justify-content-center">
                <FontAwesomeIcon className="nav-links me-3 fa-2x" icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon className="nav-links me-3 fa-2x" icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon className="nav-links me-3 fa-2x"icon={faTwitter}></FontAwesomeIcon>
                <FontAwesomeIcon className="nav-links fa-2x" icon={faWhatsapp}></FontAwesomeIcon>
            </div>
            <div className="copyright mt-3">
                <p>All right reserved by xyz@demo.com</p>
            </div>
        </div>
    );
};

export default Footer;