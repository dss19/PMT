import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store'; 
import { removeFromCart, clearCart, addOrUpdateItem } from '../../../store/reducers/CartSlice';
import IProduct from '../../../models/IProduct'; 
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../../api/categoriesApi';
import './cart-inner.css';

const CartInner: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.CartSlice.items); 
  const { data: categories } = useGetCategoriesQuery(); 

  const totalQuantity = useMemo(() => items.reduce((acc, item) => acc + item.quantity, 0), [items]);

  const totalPrice = useMemo(() => items.reduce((acc, item) => acc + item.price * item.quantity, 0), [items]);

  const handleRemoveFromCart = (id: string, quantity: number) => {
    dispatch(removeFromCart({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = (item: IProduct) => {
    dispatch(addOrUpdateItem({ id: item.id, item, quantity: item.quantity + 1 }));
  };

  const getCategorySlug = (productId: string) => {
    if (!categories) return '';

    for (const category of categories) {
      const foundProduct = category.subcategories
        .flatMap(sub => sub.products)
        .find(product => product.id === productId);

      if (foundProduct) {
        return category.slug;
      }
    }

    return '';
  }

  if (totalQuantity === 0) {
    return (
      <div className="cart-empty">
        Ваша корзина пуста, хотите вернуться в <Link to={'/catalog'} className="cart-empty-link">Каталог</Link>?
      </div>
    );
  }  

  return (
    <div className="cart-list">
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <Link to={`/catalog/${getCategorySlug(item.id)}/${item.slug}`} className="cart-item-img">
              <img src={item.images[0]} alt={item.name} />
            </Link>
            <div className="cart-item-info">
              <Link to={`/catalog/${getCategorySlug(item.id)}/${item.slug}`} className="cart-item-name">
                {item.name}
              </Link>
              <div className="cart-item-sku">Артикул: {item.sku}</div>
              <div className="cart-item-price">Цена: <span>{item.price}₽</span></div>
              <div className="cart-item-quantity">
                <span>Количество:</span>
                <button 
                  onClick={() => handleRemoveFromCart(item.id, 1)} 
                  className="cart-item-quantity-btn"
                >
                  -
                </button>
                <div className="cart-item-quantity-value">{item.quantity}</div>
                <button 
                  onClick={() => handleIncreaseQuantity(item)} 
                  className="cart-item-quantity-btn"
                >
                  +
                </button>
              </div>
              <div className="cart-item-price-total">Итого: <span>{item.price * item.quantity}₽</span></div>
              <button 
                className="cart-item-remove" 
                onClick={() => handleRemoveFromCart(item.id, item.quantity)}
              >
                Удалить из заказа
              </button>
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
