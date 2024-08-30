import React from 'react';
import HeaderPersonal from "./HeaderPersonal/HeaderPersonal";
import ContactsList from "../../ContactsList/ContactsList";
import './header-right.css';

const HeaderRight: React.FC = () => {
    return (
        <div className="header-right">
            <ContactsList/>
            <HeaderPersonal/>
        </div>
    );
};

export default HeaderRight;