import React from 'react';
import { useGetCategoriesQuery } from '../../../api/categoriesApi';
import './catalog-grid.css';
import CatalogCategories from '../CatalogCategories/CatalogCategories';

const CatalogGrid: React.FC = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="catalog-grid">
      {categories?.map((category) => (
        <CatalogCategories key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CatalogGrid;

