import React, { useState, useEffect } from 'react';
import './catalog-grid.css';
import CatalogCategories from '../CatalogCategories/CatalogCategories';
import ICategory from '../../../models/ICaterogy';

const CatalogGrid: React.FC = () => {
    const [categoriesList, setCategoriesList] = useState<ICategory[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:4000/categories'); // Проверьте правильность URL
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategoriesList(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="catalog-grid">
            {categoriesList.map((category) => (
                <CatalogCategories key={category.id} category={category} />
            ))}
        </div>
    );
};

export default CatalogGrid;

