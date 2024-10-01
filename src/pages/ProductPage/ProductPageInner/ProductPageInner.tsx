import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductBySlugQuery } from '../../../api/categoriesApi';
import ProductGallery from '../ProductGallery/ProductGallery';
import './product-page.css';
import CartButtons from '../../../components/CartButtons/CartButtons';

const ProductPageInner: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const { data: product, isLoading, isError } = useGetProductBySlugQuery(productSlug || '');

  if (isLoading) return <div>Загрузка...</div>;

  if (isError || !product) {
    return (
      <div>
        <p>Продукт не найден</p>
        <a href="/">Вернуться на главную</a>
      </div>
    );
  }

  const { name, description, price, sku, quantity, images } = product;
  console.log(description);
  

  return (
    <div className="product-page">
      <div className="product-page-content">
        {/* Проверка на наличие нескольких изображений для рендера галереи */}
        {images && images.length > 1 ? (
          <ProductGallery images={images} name={name} />
        ) : (
          // Если одно изображение, показываем его без галереи
          <img src={images[0]} alt={name} className="product-page-img" />
        )}
        <div className="product-info">
          <h1>{name}</h1>          
          <p>Цена: {price} руб.</p>
          <p>Артикул: {sku}</p>
          <p>Количество на складе: {quantity}</p>
          <CartButtons product={product}/>
        </div>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default ProductPageInner;