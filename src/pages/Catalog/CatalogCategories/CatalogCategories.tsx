import React from 'react';
import './catalog-categories.css';
import ICategory from '../../../models/ICaterogy';
import { Link } from 'react-router-dom';

interface CategoryProps {
    category: ICategory
}

const CatalogCategories: React.FC<CategoryProps> = ({ category }) => {

    
        
    return (
        <Link to={ `/catalog/${category.id}` } className="catalog-categories">
            <h5>{ category.name }</h5>            
        </Link>
    );
};

export default CatalogCategories;