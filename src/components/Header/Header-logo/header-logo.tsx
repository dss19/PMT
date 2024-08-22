import React from 'react';
import './header-logo.css';
import logo from '../../../assets/images/logo.png';

const HeaderLogo: React.FC = () => {
    return (
        <a href="/" className="header-logo">
            <img src={logo} alt="logo"/>
        </a>
    );
};

export default HeaderLogo;