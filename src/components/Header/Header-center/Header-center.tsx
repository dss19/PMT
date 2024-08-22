import React from 'react';
import './header-center.css';
import HeaderNav from "../header-nav/Header-nav";

const HeaderCenter: React.FC = () => {
    return (
        <div className="header-center">
            <HeaderNav/>
        </div>
    );
};

export default HeaderCenter;