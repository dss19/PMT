import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './category-inner.css';
import ICategory from '../../../models/ICaterogy'
import ProductCard from '../../../components/ProductCard/ProductCard';
import Container from '../../../components/Container/Container';

const CategoryInner: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<ICategory | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return; // Без slug нечего искать

    fetch('/data/categories.json')
      .then(response => response.json())
      .then((data: ICategory[]) => {
        const foundCategory = data.find(cat => cat.slug === slug);
        setCategory(foundCategory || null);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        setCategory(null);
      });
  }, [slug]);

  if (!category) return <div>Категория не найдена</div>;

  const filteredProducts = selectedSubCategory
    ? category.subCategories.find(sub => sub.slug === selectedSubCategory)?.products
    : category.subCategories.flatMap(sub => sub.products);   

  return (
    <div className="category-inner">
      <div className="category-filter">
        <Container>
          <h4 className="category-filter-ttl">{category.name}</h4>
          <ul className="category-filter-list">
            <li className={`category-filter-item ${selectedSubCategory === null ? 'active' : ''}`}
                onClick={() => setSelectedSubCategory(null)}>Все товары</li>
            {category.subCategories.map(sub => (
              <li className={`category-filter-item ${selectedSubCategory === sub.slug ? 'active' : ''}`}
                  key={sub.id}
                  onClick={() => setSelectedSubCategory(sub.slug)}>{sub.name}
              </li>
            ))}
          </ul>
        </Container>                
      </div>
      <div className="product-list">
        <Container>
          <div className="product-list-grid">
            {filteredProducts?.map(product => (
              <ProductCard key={product.id} product={product} to={`/catalog/${category.slug}/${product.slug}`} />
            ))}
          </div>          
        </Container>                
      </div>
    </div>
  );
};

export default CategoryInner;

