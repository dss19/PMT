import React from "react";
import sprite from '../../../assets/images/sprite.svg'
import './footer-social.css';

const FooterSocial: React.FC = () => {

    return (
        <div className="footer-social">
            <div className="footer-social-icons">
                <a href="/" className="footer-social-link">
                    <svg className="footer-social-icon">
                        <use href={`${sprite}#whatsapp`}></use>
                    </svg>
                </a>
                <a href="/" className="footer-social-link">
                    <svg className="footer-social-icon">
                        <use href={`${sprite}#telegram`}></use>
                    </svg>
                </a>
            </div>
            <span className="footer-copyrights">© 2024 ООО «Пневмоторг»</span>
        </div>
    )
}

export default FooterSocial;