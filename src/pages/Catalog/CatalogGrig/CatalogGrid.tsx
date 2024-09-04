import React, { useState, useEffect } from 'react';
import './catalog-grid.css';
import CatalogCategories from '../CatalogCategories/CatalogCategories';
import ICategory from '../../../models/ICaterogy';

const CatalogGrid: React.FC = () => {

    const [categoriesList, setCategoriesList] = useState<ICategory[]>([]);

    useEffect(() => {
        fetch('/data/categories.json')
            .then((response) => response.json())
            .then((data) => setCategoriesList(data));
    }, []);
        
    return (
        <div className="catalog-grid">
            {categoriesList.map((category) => (
                <CatalogCategories key={category.id} category={category} />
            ))}
        </div>
    );
};

export default CatalogGrid;