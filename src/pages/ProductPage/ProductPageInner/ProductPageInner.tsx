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

  const { name, description, price, images, parameters, brand, country } = product;

  return (
    <div className="product-page">
      <div className="product-page-content">
        {images && images.length > 1
          ? <ProductGallery images={images} name={name} />
          : <img src={images[0]} alt={name} className="product-page-img" />
        }
        <div className="product-info">
          <h5 className='product-name'>{name}</h5>
          <div className='product-price'>Цена: {price}₽ <span>(без НДС)</span></div>
          <CartButtons product={product} />
          {parameters && parameters.length > 0 ? (
            <div className="product-params">
              <h5 className='product-params-ttl'>Характеристики:</h5>
              {parameters.map((param, index) => (
                <div key={index} className="product-params-data">
                  {param}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        {description &&
          <div className='product-desc'>
            <p className='product-desc-ttl'>Описание</p>
            <p className='product-desc-text'>{description}</p>
          </div>
        }
        <div className="product-made">
          {brand &&
            <div className="product-made-brand">
              <img className="product-made-img" src={`/images/flags/${brand[0]}.jpg`} alt={brand[1]} />
              <span className='product-made-text'>{`${brand[1]} - родина бренда`}</span>
            </div>
          }
          {country &&
            <div className="product-made-brand">
              <img className="product-made-img" src={`/images/flags/${country[0]}.jpg`} alt={country[1]} />
              <span className='product-made-text'>{`${country[1]} - страна производства`}</span>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductPageInner;