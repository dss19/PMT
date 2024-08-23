import React from 'react';
import './header-products.css';
import HeaderCatalog from './HeaderCatalog/HeaderCatalog';
import HeaderSearch from './HeaderSearch/HeaderSearch';

const HeaderProducts: React.FC = () => {
    return (
        <div className="header-products">
            <HeaderCatalog/>
            <HeaderSearch/>
        </div>
    );
};

export default HeaderProducts;