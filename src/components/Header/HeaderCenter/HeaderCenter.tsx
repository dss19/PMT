import React from 'react';
import './header-center.css';
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderProducts from './HeaderProducts/HeaderProducts';

const HeaderCenter: React.FC = () => {
    return (
        <div className="header-center">
            <HeaderNav/>
            <HeaderProducts/>
        </div>
    );
};

export default HeaderCenter;