import React from 'react';
import './contacts-content.css';
import ContactsInfo from './ContactsInfo/ContactsInfo';
import ContactsPhoto from './ContactsPhoto/ContactsPhoto';

const ContactsContent: React.FC = () => {

    return (
        <div className="contacts-content">
            <ContactsInfo />
            <ContactsPhoto />
        </div>
    );
};

export default ContactsContent;