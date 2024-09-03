import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../../../assets/images/sprite.svg';
import './header-catalog.css';

const HeaderCatalog: React.FC = () => {
    return (
        <Link to="/catalog" className="header-catalog">
            <svg className="header-catalog-icon">
                <use href={`${sprite}#catalog`}></use>
            </svg>
            <span className="header-catalog-link">Каталог</span>
        </Link>
    );
};

export default HeaderCatalog;