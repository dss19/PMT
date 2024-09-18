import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './category-inner.css';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Container from '../../../components/Container/Container';
import { useGetCategoryBySlugQuery } from '../../../api/categoriesApi';

const CategoryInner: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Используем хук RTK Query для запроса категории по slug
  const { data: category, isLoading, error } = useGetCategoryBySlugQuery(slug || '');

  const [selectedSubCategory, setSelectedSubCategory] = React.useState<string | null>(null);  

  // Оптимизация фильтрации продуктов
  const filteredProducts = useMemo(() => {
    if (!category) return [];

    return selectedSubCategory
      ? category.subcategories.find(sub => sub.slug === selectedSubCategory)?.products || []
      : category.subcategories.flatMap(sub => sub.products);
  }, [category, selectedSubCategory]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке категории</div>;
  if (!category || !category.subcategories) return <div>Категория или подкатегории не найдены</div>;

  return (
    <div className="category-inner">
      <div className="category-filter">
        <Container>
          <h4 className="category-filter-ttl">{category.name}</h4>
          <ul className="category-filter-list">
            <li
              className={`category-filter-item ${selectedSubCategory === null ? 'active' : ''}`}
              onClick={() => setSelectedSubCategory(null)}
            >
              Все товары
            </li>
            {category.subcategories.map(sub => (
              <li
                className={`category-filter-item ${selectedSubCategory === sub.slug ? 'active' : ''}`}
                key={sub.id}
                onClick={() => setSelectedSubCategory(sub.slug)}
              >
                {sub.name}
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <div className="product-list">
        <div className="product-list-grid">
          {filteredProducts.map(product => (            
            <ProductCard key={product.id} product={product} to={`/catalog/${category.slug}/${product.slug}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryInner;
