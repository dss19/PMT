import React from 'react';
import './header.css';
import HeaderLogo from "./Header-logo/header-logo";

const Header: React.FC = () => {
    return (
        <header className="header">
            <HeaderLogo/>
        </header>
    );
};

export default Header;
