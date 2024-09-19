import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../store/reducers/CartSlice'; // Экшен для очистки корзины
import { useSubmitOrderMutation } from '../../../api/ordersApi'; // Используем хук RTK Query


// Описываем пропсы для товаров и общей суммы (без id)
interface OrderFormProps {
  items: Array<{ name: string; quantity: number; price: number }>;
  totalPrice: number;
}

const OrderForm: React.FC<OrderFormProps> = ({ items, totalPrice }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Используем хук для отправки данных через RTK Query
  const [submitOrder, { isLoading, isSuccess, isError }] = useSubmitOrderMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Данные о клиенте и товары из пропсов
    const orderData = {
      customerInfo: { name, phone, email },
      cartItems: items, // Берем товары из пропсов (без id)
      totalPrice,       // Общая стоимость также из пропсов
    };

    // Отправляем заказ через RTK Query
    try {
      const result = await submitOrder(orderData).unwrap(); // Дожидаемся успешного выполнения запроса
      console.log('Заказ успешно отправлен:', result);

      // Если заказ успешно отправлен, очищаем корзину
      dispatch(clearCart());
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input value={name} name='name' type='text' onChange={(e) => setName(e.target.value)} placeholder='Ваше имя' required />
      </div>
      <div>
        <input value={phone} name='phone' type='tel' onChange={(e) => setPhone(e.target.value)} placeholder='Телефон' required />        
      </div>
      <div>
        <input value={email} name='email' type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
      </div>
      <button type="submit" disabled={isLoading}>Отправить заказ</button>

      {isLoading && <p>Отправка...</p>}
      {isSuccess && <p>Заказ успешно отправлен!</p>}
      {isError && <p>Ошибка при отправке заказа!</p>}
    </form>
  );
};

export default OrderForm;
