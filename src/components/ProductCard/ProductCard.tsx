import React from "react";
import './product-card.css';
import IProduct from '../../models/IProduct';
import { Link } from 'react-router-dom';
import CartButtons from "../CartButtons/CartButtons";

interface ProductCardProps {
    product: IProduct,
    to: string
}

const ProductCard: React.FC<ProductCardProps> = ({ product, to }) => {    

    return (
        <div className="product-card">
            <Link to={to} className="product-card-inner">
                <div className="product-card-img">
                    <img src={ product.images[0] } alt={ product.sku } />
                </div>
                <div className="product-card-name">{ product.name }</div>
                <div className="product-card-info">
                    <div className="product-card-sku">{ product.sku }</div>
                    <div className="product-card-price">{ product.price }₽</div>
                </div>                
            </Link>            
            <CartButtons product={ product }/>
        </div>
        
    )
}

export default ProductCard;