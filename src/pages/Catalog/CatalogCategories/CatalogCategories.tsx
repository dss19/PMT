import React from 'react';
import './catalog-categories.css';
import ICategory from '../../../models/ICaterogy';

interface CategoryProps {
    category: ICategory
}

const CatalogCategories: React.FC<CategoryProps> = ({ category }) => {

    
        
    return (
        <div className="catalog-categories">
            <h5>{ category.name }</h5>            
        </div>
    );
};

export default CatalogCategories;