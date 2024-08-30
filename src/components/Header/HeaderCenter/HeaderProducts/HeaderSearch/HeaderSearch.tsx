import React from 'react';
import sprite from '../../../../../assets/images/sprite.svg';
import './header-search.css';

const HeaderSearch: React.FC = () => {
    return (
        <form className="header-search">
            <input type="text" id="header-search-input" className="header-search-input" name="header-search-input" placeholder='Что будем искать?'/>
            <button className="header-search-submit">
                <svg className="header-search-icon">
                    <use href={`${sprite}#search`}></use>
                </svg>
            </button>
        </form>
    );
};

export default HeaderSearch;