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

  const { name, description, price, images, parameters, brand, country, benefits } = product;

  return (
    <div className="product-page">
      <div className="product-page-content">
        {images && images.length > 1
          ? <ProductGallery images={images} name={name} />
          : <img src={images[0]} alt={name} className="product-page-img" />
        }
        <div className="product-info">
          <h1 className='product-name'>{name}</h1>
          <h2 className='product-price'>Цена: {price}₽ <span>(без НДС)</span></h2>
          <CartButtons product={product} />
          {parameters && parameters.length > 0 ? (
            <div className="product-params">
              <h2 className='product-params-ttl'>Характеристики:</h2>
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
            <h2 className='product-desc-ttl'>Описание</h2>
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
          <div className="product-benefits">
            <h2 className="product-benefits-ttl">Преимущества:</h2>
            {benefits &&
              benefits.map((item, index) => (
                <div key={index} className="product-benefits-row">{item}</div>
              ))
            }
            <div className="product-garanty">
              <img src="/images/done.png" alt="гарантия" className="product-garanty-img" />
              <h2 className="product-garanty-text">Гарантия 6 месяцев</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageInner;