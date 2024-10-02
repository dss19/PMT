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

  return (
    <div className="product-page">
      <div className="product-page-content">
        {images && images.length > 1 
          ? <ProductGallery images={images} name={name} />
          : <img src={images[0]} alt={name} className="product-page-img" />
        }
        <div className="product-info">
          <h5 className='product-name'>{name}</h5>
          <div className="product-sku">Артикул: {sku}</div>          
          <div className='product-price'>Цена: {price}₽</div>
          <p>Количество: {quantity}шт.</p>
          <CartButtons product={product}/>
        </div>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default ProductPageInner;