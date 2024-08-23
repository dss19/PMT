import React from 'react';
import sprite from '../../../../../assets/images/sprite.svg';
import './header-account.css';

const HeaderAccount: React.FC = () => {
    return (
        <a href="/" className="header-account">
            <svg className="header-account-icon">
                <use href={`${sprite}#account`}></use>
            </svg>
        </a>
    )
};

export default HeaderAccount;