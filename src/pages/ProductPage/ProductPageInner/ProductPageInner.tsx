// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useGetProductBySlugQuery } from '../../../api/categoriesApi'; // Импортируем хук для запроса продукта по slug
// // import './product-page.css'; // Стили для страницы продукта

// const ProductPageInner: React.FC = () => {
//   // Получаем slug продукта из параметров URL
//   const { productSlug } = useParams<{ productSlug: string }>();

//   // Запрашиваем данные о продукте по slug через RTK Query
//   const { data: product, isLoading, isError } = useGetProductBySlugQuery(productSlug || '');

//   // Обработка загрузки данных
//   if (isLoading) return <div>Загрузка...</div>;

//   // Обработка ошибки
//   if (isError || !product) return <div>Продукт не найден</div>;

//   // Отображение информации о продукте
//   return (
//     <div className="product-page">
//       <h1>{product.name}</h1>
//       <div className="product-page-content">
//         {/* Изображение продукта */}
//         {product.images && product.images.length > 0 && (
//           <img src={product.images[0]} alt={product.name} className="product-image" />
//         )}

//         {/* Описание и характеристики */}
//         <div className="product-info">
//           <p>{product.description}</p>
//           <p>Цена: {product.price} руб.</p>
//           <p>Артикул: {product.sku}</p>
//           <p>Количество на складе: {product.quantity}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPageInner;
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductBySlugQuery } from '../../../api/categoriesApi'; // Используем хук для запроса продукта по slug
import '@fancyapps/ui/dist/carousel/carousel.css'; // Импортируем стили Fancybox
import { Fancybox as NativeFancybox } from '@fancyapps/ui'; // Импортируем сам Fancybox
// import './product-page.css'; // Стили для страницы продукта

const ProductPageInner: React.FC = () => {
  // Получаем slug продукта из параметров URL
  const { productSlug } = useParams<{ productSlug: string }>();

  // Запрашиваем данные о продукте по slug через RTK Query
  const { data: product, isLoading, isError } = useGetProductBySlugQuery(productSlug || '');

  // Инициализируем Fancybox при изменении данных продукта
  useEffect(() => {
    NativeFancybox.bind('[data-fancybox="gallery"]', {}); // Инициализация галереи
    return () => {
      NativeFancybox.destroy(); // Очистка галереи при размонтировании компонента
    };
  }, [product]);

  // Обработка загрузки данных
  if (isLoading) return <div>Загрузка...</div>;

  // Обработка ошибки
  if (isError || !product) return <div>Продукт не найден</div>;
  

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <div className="product-page-content">
        {/* Галерея изображений */}
        <div className="product-gallery">
          {product.images && product.images.length > 1 ? (
            <div className="image-gallery">
              {product.images.map((image, index) => (
                <a
                  key={index}
                  href={image} // Ссылка на полное изображение
                  data-fancybox="gallery" // Указываем галерею для Fancybox
                  data-caption={product.name} // Подпись для изображения
                  className="gallery-item"
                >
                  <img src={image} alt={product.name} className="product-image" />
                </a>
              ))}
            </div>
          ) : (
            // Если у продукта только одно изображение, отображаем его без галереи
            <img src={product.images[0]} alt={product.name} className="product-image" />
          )}
        </div>

        {/* Описание и характеристики */}
        <div className="product-info">
          <p>{product.description}</p>
          <p>Цена: {product.price} руб.</p>
          <p>Артикул: {product.sku}</p>
          <p>Количество на складе: {product.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPageInner;
