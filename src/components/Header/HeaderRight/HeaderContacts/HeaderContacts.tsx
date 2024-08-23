import React from 'react';
import './header-contacts.css';

const HeaderContacts: React.FC = () => {
    return (
        <div className='header-contacts'>
            <a href="mailto:info@pnevmo-torg.ru" className="header-email">info@pnevmo-torg.ru</a>
            <a href="tel:+78005117128" className="header-phone">8-800-511-71-28</a>
        </div>
    );
};

export default HeaderContacts;