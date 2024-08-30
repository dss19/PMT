import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { toggleMenu } from '../../../store/reducers/MenuSlice';
import './header-logo.css';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const HeaderLogo: React.FC = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state: RootState) => state.MenuSlice.isMenuOpen);

    const handleMobileMunuClose = () => {
        if (window.matchMedia('(max-width:992px)').matches && isMenuOpen) {            
            dispatch(toggleMenu());
        }
    }

    return (
        <Link onClick={handleMobileMunuClose} to="/" className="header-logo">
            <img src={logo} alt="logo"/>
        </Link>
    );
};

export default HeaderLogo;