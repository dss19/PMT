import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import './ProductPage.css';

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description?: string;
  images: string[];
}

const ProductPageInner: React.FC = () => {
    const { productSlug } = useParams<{ categorySlug: string, productSlug: string }>();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch('/data/categories.json')
      .then(response => response.json())
      .then((data) => {
        const allProducts = data.flatMap((category: any) => 
          category.subCategories.flatMap((subCategory: any) => subCategory.products)
        );
        const foundProduct = allProducts.find((prod: Product) => prod.slug === productSlug);
        setProduct(foundProduct || null);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        setProduct(null);
      });
  }, [productSlug]);

  if (!product) return <div>Продукт не найден</div>;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Цена: {product.price} руб.</p>
      <img src={product.images[0]} alt={product.name} />
    </div>
  );
};

export default ProductPageInner;
