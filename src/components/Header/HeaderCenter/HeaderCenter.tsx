import React from 'react';
import './header-center.css';
import Navigation from "../../Navigation/Navigation";
import HeaderProducts from './HeaderProducts/HeaderProducts';

const HeaderCenter: React.FC = () => {
    return (
        <div className="header-center">
            <Navigation />
            <HeaderProducts/>
        </div>
    );
};

export default HeaderCenter;