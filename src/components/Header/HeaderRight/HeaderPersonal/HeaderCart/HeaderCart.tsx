import React from 'react';
import { useSelector } from 'react-redux';
import sprite from '../../../../../assets/images/sprite.svg';
import './header-cart.css';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../../store/store';

const HeaderCart: React.FC = () => {

    const { totalQuantity } = useSelector((state: RootState) => state.CartSlice);
    const visibleQuantity = totalQuantity === 0 ? '' : totalQuantity

    return (
        <Link to={'/cart'} className="header-cart">
            <div className="header-cart-wrap">
                <span className="count">{ visibleQuantity }</span>
                <svg className="header-cart-icon">
                    <use href={`${sprite}#cart`}></use>
                </svg>
            </div>            
        </Link>
    );
};

export default HeaderCart;