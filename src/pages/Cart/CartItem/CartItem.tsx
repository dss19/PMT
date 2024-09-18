import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, addOrUpdateItem } from '../../../store/reducers/CartSlice';
import IProduct from '../../../models/IProduct'; 
import { Link } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../../api/categoriesApi';

interface CartItemProps {
  item: IProduct;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  
  // Используем хук для получения данных продукта
  const { data: product, error } = useGetProductByIdQuery(item.id);

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id: item.id, quantity: item.quantity }));
  };

  const handleIncreaseQuantity = () => {
    dispatch(addOrUpdateItem({ id: item.id, item, quantity: item.quantity + 1 }));
  };  

  if (error || !product) return <div>Ошибка загрузки товара</div>;

  return (
    <div className="cart-item">
      <Link to={`/catalog/${product.categoryslug}/${item.slug}`} className="cart-item-img">
        <img src={item.images[0]} alt={item.name} />
      </Link>
      <div className="cart-item-info">
        <Link to={`/catalog/${product.categoryslug}/${item.slug}`} className="cart-item-name">
          {item.name}
        </Link>
        <div className="cart-item-sku">Артикул: {item.sku}</div>
        <div className="cart-item-price">Цена: <span>{item.price}₽</span></div>
        <div className="cart-item-quantity">
          <span>Количество:</span>
          <button onClick={handleRemoveFromCart} className="cart-item-quantity-btn">-</button>
          <div className="cart-item-quantity-value">{item.quantity}</div>
          <button onClick={handleIncreaseQuantity} className="cart-item-quantity-btn">+</button>
        </div>
        <div className="cart-item-price-total">Итого: <span>{item.price * item.quantity}₽</span></div>
        <button className="cart-item-remove" onClick={handleRemoveFromCart}>Удалить из заказа</button>
      </div>
    </div>
  );
};

export default CartItem;
