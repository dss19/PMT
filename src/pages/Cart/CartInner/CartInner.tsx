import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store'; 
import { removeFromCart, clearCart, addOrUpdateItem } from '../../../store/reducers/CartSlice';
import { Link } from 'react-router-dom';
import './cart-inner.css';

const CartInner: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state: RootState) => state.CartSlice);

  const handleRemoveFromCart = (id: string, quantity: number) => {
    dispatch(removeFromCart({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = (item: any) => {
    dispatch(addOrUpdateItem({ id: item.id, item, quantity: item.quantity + 1 }));
  };

  if (totalQuantity === 0) {
    return (
      <div className="cart-empty">Ваша корзина пуста, хотите вернуться в <Link to={'/catalog'} className="cart-empty-link">Каталог</Link>?</div>
    );
  }

  return (
    <div className="cart-list">
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-img">
              <img src={item.images[0]} alt={item.name} />
            </div>
            <div className="cart-item-info">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-sku">Артикул: {item.sku}</div>
            </div>
            <div className="cart-item-price">Цена: {item.price} руб.</div>
            <div className="cart-item-total-price">Итого: {item.price * item.quantity} руб.</div>
            <div className="cart-item-quantity">
              <button onClick={() => handleRemoveFromCart(item.id, 1)} className="cart-item-quantity-btn">-</button>
              <div className="cart-item-quantity-value">{item.quantity}</div>
              <button onClick={() => handleIncreaseQuantity(item)} className="cart-item-quantity-btn">+</button>
            </div>
            <button onClick={() => handleRemoveFromCart(item.id, item.quantity)}>Удалить все</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <span>Всего товаров: {totalQuantity}</span>
        <span>На сумму: {totalPrice} руб.</span>
        <button onClick={handleClearCart}>Очистить корзину</button>
      </div>
    </div>
  );
};

export default CartInner;
