import React from 'react';
import HeaderCart from './HeaderCart/HeaderCart';
import HeaderAccount from './HeaderAccount/HeaderAccount';
import './header-personal.css';

const HeaderPersonal: React.FC = () => {
    return (
        <div className='header-personal'>
            <HeaderCart/>
            <HeaderAccount/>
        </div>
    );
};

export default HeaderPersonal;