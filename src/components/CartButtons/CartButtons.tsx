import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/CartSlice'; // Импорт экшена добавления в корзину
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
      dispatch(addToCart(product)); // Добавление товара в корзину
    };
  
    const handleOrderNow = () => {
      dispatch(addToCart(product)); // Добавление товара в корзину
      navigate('/cart'); // Переход на страницу корзины
    };
  
    return (
      <div className="cart-buttons">
        <button onClick={handleAddToCart} className="cart-btn cart-btn-add">В корзину</button>
        <button onClick={handleOrderNow} className="cart-btn cart-btn-order">Заказать</button>
      </div>
    );
  };
  
  export default CartButtons;
