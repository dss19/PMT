import React from 'react';
import { useDispatch } from 'react-redux';
import { addOrUpdateItem } from '../../store/reducers/CartSlice';
import { useNavigate } from 'react-router-dom';
import IProduct from '../../models/IProduct';
import './cart-buttons.css';

interface CartButtonsProps {
  product: IProduct
}

const CartButtons: React.FC<CartButtonsProps> = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleAddToCart = () => {
      dispatch(addOrUpdateItem({ id: product.id, item: product, quantity: 1 }));
    };
  
    const handleOrderNow = () => {
      dispatch(addOrUpdateItem({ id: product.id, item: product, quantity: 1 }));
      navigate('/cart');
    };
  
    return (
      <div className="cart-buttons">
        <button onClick={handleAddToCart} className="cart-btn cart-btn-add">В корзину</button>
        <button onClick={handleOrderNow} className="cart-btn cart-btn-order">Заказать</button>
      </div>
    );
  };
  
  export default CartButtons;
