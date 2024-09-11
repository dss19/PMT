import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store'; // Импорт состояния из Redux store
import { removeFromCart, clearCart } from '../../../store/reducers/CartSlice';

const CartInner: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity } = useSelector((state: RootState) => state.CartSlice);

  const handleRemoveFromCart = (id: string, quantity: number) => {
    dispatch(removeFromCart({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (totalQuantity === 0) {
    return <div className="cart-empty">Ваша корзина пуста</div>;
  }

  return (
    <div className="cart-container">
      <h2>Корзина</h2>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>Цена: {item.price} руб.</span>
            <span>Количество: {item.quantity}</span>
            <button onClick={() => handleRemoveFromCart(item.id, 1)}>Удалить одну единицу</button>
            <button onClick={() => handleRemoveFromCart(item.id, item.quantity)}>Удалить все</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <span>Всего товаров: {totalQuantity}</span>
        <button onClick={handleClearCart}>Очистить корзину</button>
      </div>
    </div>
  );
};

export default CartInner;
