import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { toggleMenu } from '../../../../../store/reducers/MenuSlice';
import './header-burger.css';
import HeaderMobile from '../../../HeaderMobile/HeaderMobile';

const HeaderBurger: React.FC = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state: RootState) => state.MenuSlice.isMenuOpen);

    const handleBurgerClick = () => {
        if (window.matchMedia('(max-width:992px)').matches) {
            dispatch(toggleMenu());
        }
    };

    return (
        <div className="header-burger">
            <div onClick={handleBurgerClick} className={`header-burger-wrap ${isMenuOpen ? 'burger-open' : ''}`}>
                <span></span>
            </div>
            <HeaderMobile className={isMenuOpen ? 'active' : ''} />
        </div>
    );
};

export default HeaderBurger;
