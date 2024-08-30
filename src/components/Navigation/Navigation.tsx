import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleMenu } from '../../store/reducers/MenuSlice';
import './nav.css';
import { Link } from 'react-router-dom';

const HeaderNav: React.FC = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state: RootState) => state.MenuSlice.isMenuOpen);

    const handleMobileMunuClose = () => {
        if (window.matchMedia('(max-width:992px)').matches && isMenuOpen) {
            dispatch(toggleMenu());
        }
    }

    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item"><Link onClick={handleMobileMunuClose} to="/about" className="nav-link">О компании</Link></li>
                <li className="nav-item"><Link onClick={handleMobileMunuClose} to="/payment" className="nav-link">Оплата и доставка</Link></li>
                <li className="nav-item"><Link onClick={handleMobileMunuClose} to="/news" className="nav-link">Новости</Link></li>
                <li className="nav-item"><Link onClick={handleMobileMunuClose} to="/contacts" className="nav-link">Контакты</Link></li>
            </ul>
        </nav>
    );
};

export default HeaderNav;