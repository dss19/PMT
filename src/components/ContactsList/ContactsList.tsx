import React from 'react';
import './contacts-list.css';

const ContactsList: React.FC = () => {
    return (
        <div className='contacts-list'>
            <a href="mailto:info@pnevmo-torg.ru" className="email">info@pnevmo-torg.ru</a>
            <a href="tel:+78005117128" className="phone">8-800-511-71-28</a>
        </div>
    );
};

export default ContactsList;