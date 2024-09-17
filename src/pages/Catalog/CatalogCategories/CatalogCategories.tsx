import React from 'react';
import './catalog-categories.css';
import ICategory from '../../../models/ICaterogy';
import { Link } from 'react-router-dom';


const CatalogCategories: React.FC<{ category: ICategory }> = React.memo(({ category }) => {     
        
    return (
        <Link to={ `/catalog/${category.slug}` } className="catalog-categories">
            <h5 className="catalog-categories-name">{ category.name }</h5>  
            <img className="catalog-categories-img" src={category.iconurl} alt={ category.name } />         
        </Link>
    );
});

export default CatalogCategories;