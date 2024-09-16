import React from 'react';
import './catalog-categories.css';
import ICategory from '../../../models/ICaterogy';
import { Link } from 'react-router-dom';

interface CategoryProps {
    category: ICategory
}

const CatalogCategories: React.FC<CategoryProps> = ({ category }) => {    
        
    return (
        <Link to={ `/catalog/${category.slug}` } className="catalog-categories">
            <h5 className="catalog-categories-name">{ category.name }</h5>  
            <img className="catalog-categories-img" src="/images/category-icons/pneumo.svg" alt="пневмоинструмент" />          
        </Link>
    );
};

export default CatalogCategories;