import React from 'react';
import './contacts-photo.css';
import image from '../../../../assets/images/office.webp';

const ContactsPhoto: React.FC = () => {

    return (
        <div className="contacts-photo">
            <img src={image} alt="office" />
        </div>
    );
};

export default ContactsPhoto;