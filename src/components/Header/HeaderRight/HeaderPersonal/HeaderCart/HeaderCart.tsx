import React from 'react';
import sprite from '../../../../../assets/images/sprite.svg';
import './header-cart.css';

const HeaderCart: React.FC = () => {
    return (
        <a href="/" className="header-cart">
            <div className="header-cart-wrap">
                <span className="count">2</span>
                <svg className="header-cart-icon">
                    <use href={`${sprite}#cart`}></use>
                </svg>
            </div>            
        </a>
    );
};

export default HeaderCart;