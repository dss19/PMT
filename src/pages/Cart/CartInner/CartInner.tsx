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
              <div className="cart-item-price">Цена: <span>{item.price}₽</span></div>
              <div className="cart-item-quantity">
                <span>Количество:</span>
                <button onClick={() => handleRemoveFromCart(item.id, 1)} className="cart-item-quantity-btn">-</button>
                <div className="cart-item-quantity-value">{item.quantity}</div>
                <button onClick={() => handleIncreaseQuantity(item)} className="cart-item-quantity-btn">+</button>
              </div>
              <div className="cart-item-price-total">Итого: <span>{item.price * item.quantity}₽</span></div>
              <button className="cart-item-remove" onClick={() => handleRemoveFromCart(item.id, item.quantity)}>Удалить из заказа</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-summary-text">Всего товаров: <span>{totalQuantity}</span></div>
        <div className="cart-summary-text">На сумму: <span>{totalPrice}₽</span></div>
        <button onClick={handleClearCart}>Очистить корзину</button>
      </div>
    </div>
  );
};

export default CartInner;
