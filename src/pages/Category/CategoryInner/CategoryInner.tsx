import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './category-inner.css';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Container from '../../../components/Container/Container';
import { useGetCategoryBySlugQuery } from '../../../api/categoriesApi';
import DesktopFilter from '../CategoryFilters/DesktopFilter';
import MobileFilter from '../CategoryFilters/MobileFilter';

const CategoryInner: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: category, isLoading, error } = useGetCategoryBySlugQuery(slug || '');

  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [isMobileView, setIsMobileView] = useState<boolean>(window.matchMedia('(max-width: 768px)').matches);

  // Следим за изменением разрешения экрана
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobileView(e.matches);
    };

    // Добавляем слушатель изменений медиа-запросов
    mediaQuery.addEventListener('change', handleMediaChange);

    // Удаляем слушатель при размонтировании компонента
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

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

          {/* Переключение фильтров в зависимости от разрешения */}
          {isMobileView ? (
            <MobileFilter
              subcategories={category.subcategories}
              selectedSubCategory={selectedSubCategory}
              setSelectedSubCategory={setSelectedSubCategory}
            />
          ) : (
            <DesktopFilter
              subcategories={category.subcategories}
              selectedSubCategory={selectedSubCategory}
              setSelectedSubCategory={setSelectedSubCategory}
            />
          )}
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
