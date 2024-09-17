// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './category-inner.css';
// import ICategory from '../../../models/ICaterogy'
// import ProductCard from '../../../components/ProductCard/ProductCard';
// import Container from '../../../components/Container/Container';

// const CategoryInner: React.FC = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const [category, setCategory] = useState<ICategory | null>(null);
//   const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

//   useEffect(() => {
//     if (!slug) return; // Без slug нечего искать

//     fetch('/data/categories.json')
//       .then(response => response.json())
//       .then((data: ICategory[]) => {
//         const foundCategory = data.find(cat => cat.slug === slug);
//         setCategory(foundCategory || null);
//       })
//       .catch(error => {
//         console.error('Ошибка при загрузке данных:', error);
//         setCategory(null);
//       });
//   }, [slug]);

//   if (!category) return <div>Категория не найдена</div>;

//   const filteredProducts = selectedSubCategory
//     ? category.subcategories.find(sub => sub.slug === selectedSubCategory)?.products
//     : category.subcategories.flatMap(sub => sub.products);   

//   return (
//     <div className="category-inner">
//       <div className="category-filter">
//         <Container>
//           <h4 className="category-filter-ttl">{category.name}</h4>
//           <ul className="category-filter-list">
//             <li className={`category-filter-item ${selectedSubCategory === null ? 'active' : ''}`}
//                 onClick={() => setSelectedSubCategory(null)}>Все товары</li>
//             {category.subcategories.map(sub => (
//               <li className={`category-filter-item ${selectedSubCategory === sub.slug ? 'active' : ''}`}
//                   key={sub.id}
//                   onClick={() => setSelectedSubCategory(sub.slug)}>{sub.name}
//               </li>
//             ))}
//           </ul>
//         </Container>                
//       </div>
//       <div className="product-list">
//           <div className="product-list-grid">
//             {filteredProducts?.map(product => (
//               <ProductCard key={product.id} product={product} to={`/catalog/${category.slug}/${product.slug}`} />
//             ))}
//           </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryInner;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './category-inner.css';
// import ICategory from '../../../models/ICaterogy';
// import ProductCard from '../../../components/ProductCard/ProductCard';
// import Container from '../../../components/Container/Container';

// const CategoryInner: React.FC = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const [category, setCategory] = useState<ICategory | null>(null);
//   const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

//   useEffect(() => {
//     if (!slug) return; // Без slug нечего искать

//     // Заменим запрос к json-файлу на запрос к API
//     fetch(`http://localhost:4000/categories/${slug}`)
//       .then(response => response.json())
//       .then((data: ICategory) => {
//         setCategory(data || null);
//       })
//       .catch(error => {
//         console.error('Ошибка при загрузке данных:', error);
//         setCategory(null);
//       });
//   }, [slug]);

//   if (!category) return <div>Категория не найдена</div>;

//   // Проверяем, есть ли подкатегории
//   const subCategories = category.subcategories || [];

//   console.log(subCategories, category);
  

//   const filteredProducts = selectedSubCategory
//     ? subCategories.find(sub => sub.slug === selectedSubCategory)?.products
//     : subCategories.flatMap(sub => sub.products);

//   return (
//     <div className="category-inner">
//       <div className="category-filter">
//         <Container>
//           <h4 className="category-filter-ttl">{category.name}</h4>
//           <ul className="category-filter-list">
//             <li className={`category-filter-item ${selectedSubCategory === null ? 'active' : ''}`}
//                 onClick={() => setSelectedSubCategory(null)}>Все товары</li>
//             {subCategories.map(sub => (
//               <li className={`category-filter-item ${selectedSubCategory === sub.slug ? 'active' : ''}`}
//                   key={sub.id}
//                   onClick={() => setSelectedSubCategory(sub.slug)}>{sub.name}
//               </li>
//             ))}
//           </ul>
//         </Container>                
//       </div>
//       <div className="product-list">
//         <div className="product-list-grid">
//           {filteredProducts?.map(product => (
//             <ProductCard key={product.id} product={product} to={`/catalog/${category.slug}/${product.slug}`} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryInner;

import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './category-inner.css';
import ICategory from '../../../models/ICaterogy';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Container from '../../../components/Container/Container';

const CategoryInner: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<ICategory | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Получаем категорию с бэкенда
  useEffect(() => {
    if (!slug) return; // Без slug нечего искать

    setLoading(true);
    fetch(`http://localhost:4000/categories/${slug}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        return response.json();
      })
      .then((data: ICategory) => {
        setCategory(data);
        setError(null); // Обнуляем ошибку при успешной загрузке
      })
      .catch((err) => {
        setError('Ошибка при загрузке категории');
        setCategory(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  // Оптимизация фильтрации продуктов с помощью useMemo
  const filteredProducts = useMemo(() => {
    if (!category) return [];

    return selectedSubCategory
      ? category.subcategories.find(sub => sub.slug === selectedSubCategory)?.products || []
      : category.subcategories.flatMap(sub => sub.products);
  }, [category, selectedSubCategory]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!category || !category.subcategories) return <div>Категория или подкатегории не найдены</div>;

  return (
    <div className="category-inner">
      <div className="category-filter">
        <Container>
          <h4 className="category-filter-ttl">{category.name}</h4>
          <ul className="category-filter-list">
            <li className={`category-filter-item ${selectedSubCategory === null ? 'active' : ''}`}
                onClick={() => setSelectedSubCategory(null)}>Все товары</li>
            {category.subcategories.map(sub => (
              <li className={`category-filter-item ${selectedSubCategory === sub.slug ? 'active' : ''}`}
                  key={sub.id}
                  onClick={() => setSelectedSubCategory(sub.slug)}>{sub.name}
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <div className="product-list">
        <div className="product-list-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              to={`/catalog/${category.slug}/${product.slug}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryInner;
