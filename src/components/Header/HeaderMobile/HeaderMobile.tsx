import React from 'react';
import './header-mobile.css';
import IClassName from "../../../models/IClassName";
import Navigation from '../../Navigation/Navigation';
import ContactsList from '../../ContactsList/ContactsList';

const HeaderMobile: React.FC<IClassName> = ({ className = '' }) => {

    return (
        <div className={`header-mobile ${className}`}>
            <Navigation />
            <ContactsList />
        </div>
    );
};

export default HeaderMobile;