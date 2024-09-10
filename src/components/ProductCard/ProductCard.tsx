import React from "react";
import './product-card.css';
import IProduct from '../../models/IProduct';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: IProduct,
    to: string
}

const ProductCard: React.FC<ProductCardProps> = ({ product, to }) => {

    return (
        <Link to={to} className="product-card">
            <div className="product-card-name">{ product.name }</div>
            <div className="product-card-img">
                <img src={ product.images[0] } alt={ product.sku } />
            </div>
            <div className="product-card-info">
                <div className="product-card-sku">{ product.sku }</div>
                <div className="product-card-price">{ product.price }₽</div>
            </div>
        </Link>
    )
}

export default ProductCard