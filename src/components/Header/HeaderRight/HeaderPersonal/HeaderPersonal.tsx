import React from 'react';
import HeaderCart from './HeaderCart/HeaderCart';
import HeaderBurger from './HeaderBurger/HeaderBurger';
import './header-personal.css';

const HeaderPersonal: React.FC = () => {
    return (
        <div className='header-personal'>
            <HeaderCart/>
            <HeaderBurger/>
        </div>
    );
};

export default HeaderPersonal;