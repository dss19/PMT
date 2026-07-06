import React from 'react';
import { useGetCategoriesQuery } from '../../../api/categoriesApi';
import { Link } from 'react-router-dom';
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
      <Link to={`/catlery`} className="catalog-categories">
        <div className="catalog-categories-inner">
          <h5 className="catalog-categories-name">{`Пластины`}</h5>
          <img className="catalog-categories-img" src={`/images/category-icons/burs.svg`} alt={`Пластины`} />
        </div>
      </Link>
    </div>
  );
};

export default CatalogGrid;

