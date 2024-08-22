import React from 'react';
import './header.css';
import HeaderLogo from "./Header-logo/Header-logo";
import HeaderCenter from "./Header-center/Header-center";
import HeaderRight from "./Header-right/Header-right";

const Header: React.FC = () => {
    return (
        <header className="header">
            <HeaderLogo/>
            <HeaderCenter/>
            <HeaderRight/>
        </header>
    );
};

export default Header;
