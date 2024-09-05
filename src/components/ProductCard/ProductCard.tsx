import React from "react";
import './product-card.css';
import IProduct from '../../models/IProduct';

interface ProductProps {
    product: IProduct
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {

    return (
        <div className="product-card">
            <div className="product-card-name">{ product.name }</div>
            <div className="product-card-price">{ product.price }</div>
        </div>
    )
}

export default ProductCard;