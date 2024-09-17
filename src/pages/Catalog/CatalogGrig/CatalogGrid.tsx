import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './catalog-grid.css';
import CatalogCategories from '../CatalogCategories/CatalogCategories';
import { fetchCategories } from '../../../store/thunks';
import { RootState, AppDispatch } from '../../../store/store';

const CatalogGrid: React.FC = () => {
    const dispatch: AppDispatch = useDispatch(); // Используем тип для dispatch

    const { categories, loading, error } = useSelector((state: RootState) => state.ProductsSlice); // Меняем на правильный slice

    useEffect(() => {
        dispatch(fetchCategories()); // Используем thunk
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="catalog-grid">
            {categories.map((category) => (
                <CatalogCategories key={category.id} category={category} />
            ))}
        </div>
    );
};

export default CatalogGrid;