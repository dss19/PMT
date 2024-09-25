import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store'; 
import { clearCart } from '../../../store/reducers/CartSlice';
import CartItem from '../CartItem/CartItem';
import OrderForm from '../CartForm/CartForm'; // Импортируем компонент формы
import { Link } from 'react-router-dom';
import './cart-inner.css';

const CartInner: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.CartSlice.items);

  const totalQuantity = useMemo(() => items.reduce((acc, item) => acc + item.quantity, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((acc, item) => acc + item.price * item.quantity, 0), [items]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (totalQuantity === 0) {
    return (
      <div className="cart-empty">
        Ваша корзина пуста, хотите вернуться в <Link to={'/catalog'} className="cart-empty-link">Каталог</Link>?
      </div>
    );
  }

  // Подготавливаем данные для формы заказа, исключая id товаров
  const orderItems = items.map(item => ({
    name: item.name,
    quantity: item.quantity,
    price: item.price,
  }));

  return (
    <div className="cart-list">
      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.id} item={item} /> 
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-summary-text">Всего товаров: <span>{totalQuantity}</span></div>
        <div className="cart-summary-text">На сумму: <span>{totalPrice}₽</span></div>
        <button className='cart-summary-clear' onClick={handleClearCart}>Очистить корзину</button>
      </div>

      {/* Передаем данные без id товаров */}
      <OrderForm items={orderItems} totalPrice={totalPrice} />
    </div>
  );
};

export default CartInner;
