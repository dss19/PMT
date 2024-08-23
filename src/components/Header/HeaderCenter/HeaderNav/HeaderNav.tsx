import React from 'react';
import './header-nav.css';

const HeaderNav: React.FC = () => {
    return (
        <nav className="header-nav">
            <ul className="header-nav-list">
                <li className="header-nav-item"><a href="/" className="header-nav-link">О компании</a></li>
                <li className="header-nav-item"><a href="/" className="header-nav-link">Оплата и доставка</a></li>
                <li className="header-nav-item"><a href="/" className="header-nav-link">Гарантия</a></li>
                <li className="header-nav-item"><a href="/" className="header-nav-link">Контакты</a></li>
            </ul>
        </nav>
    );
};

export default HeaderNav;