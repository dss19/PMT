import React from 'react';
import HeaderPersonal from "./HeaderPersonal/HeaderPersonal";
import HeaderContacts from "./HeaderContacts/HeaderContacts";
import './header-right.css';

const HeaderRight: React.FC = () => {
    return (
        <div className="header-right">
            <HeaderContacts/>
            <HeaderPersonal/>
        </div>
    );
};

export default HeaderRight;