import React from 'react';
import './header-logo.css';
import logo from '../../../assets/images/logo.png';

const HeaderLogo: React.FC = () => {
    return (
        <div className="header-logo">
            <img src={logo} alt="logo"/>
        </div>
    );
};

export default HeaderLogo;