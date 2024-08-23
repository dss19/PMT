import React from 'react';
import sprite from '../../../../../assets/images/sprite.svg';
import './header-catalog.css';

const HeaderCatalog: React.FC = () => {
    return (
        <a href="/" className="header-catalog">
            <svg className="header-catalog-icon">
                <use href={`${sprite}#catalog`}></use>
            </svg>
            <span className="header-catalog-link">Каталог</span>
        </a>
    );
};

export default HeaderCatalog;