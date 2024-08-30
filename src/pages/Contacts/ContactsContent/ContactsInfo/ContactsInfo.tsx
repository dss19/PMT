import React from 'react';
import sprite from '../../../../assets/images/sprite.svg';
import './contacts-info.css';

const ContactsInfo: React.FC = () => {

    return (
        <div className="contacts-info">
            <h3 className="contacts-ttl">Офис, склад</h3>
            <div className="contacts-block">
                <svg className="contacts-block-icon">
                    <use href={`${sprite}#pin`}></use>
                </svg>
                <p className="contacts-adress contacts-text">440008, Пенза, ул. Гражданская, 20</p>
            </div>
            <div className="contacts-block">
                <svg className="contacts-block-icon">
                    <use href={`${sprite}#phone`}></use>
                </svg>
                <a href="tel:+78005117128" className="contscts-phone contacts-text">8-800-511-71-28</a>
            </div>
            <div className="contacts-block">
                <svg className="contacts-block-icon">
                    <use href={`${sprite}#mail`}></use>
                </svg>
                <a href="mailto:info@pnevmo-torg.ru" className="contacts-email contacts-text">info@pnevmo-torg.ru</a>
            </div>
            <div className="contacts-block">
                <svg className="contacts-block-icon">
                    <use href={`${sprite}#clock`}></use>
                </svg>
                <p className="contacts-worktime contacts-text">Пн-Пт, 9:30-17:00</p>
            </div>
        </div>
    );
};

export default ContactsInfo;

