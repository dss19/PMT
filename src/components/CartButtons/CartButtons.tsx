import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/reducers/CartSlice';
import { useNavigate } from 'react-router-dom';
import IProduct from '../../models/IProduct';
import './cart-buttons.css';

interface CartButtonsProps {
  product: IProduct;
}

const CartButtons: React.FC<CartButtonsProps> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Добавление товара в корзину
  const handleAddToCart = () => {
    dispatch(addItemToCart({
      ...product,       // Передаем сам продукт
      quantity: 1       // Устанавливаем количество 1
    }));
  };

  // Добавление товара в корзину и переход на страницу корзины
  const handleOrderNow = () => {
    dispatch(addItemToCart({
      ...product,
      quantity: 1
    }));
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
