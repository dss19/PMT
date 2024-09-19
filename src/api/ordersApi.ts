import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Создаем API с помощью RTK Query
export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // Укажите ваш базовый URL
  endpoints: (builder) => ({
    // Определяем mutation для отправки заказа
    submitOrder: builder.mutation({
      query: (orderData) => ({
        url: 'order.php', // PHP-скрипт, который обрабатывает заказ
        method: 'POST',
        body: orderData, // Отправляем данные заказа
      }),
    }),
  }),
});

// Экспортируем хук для использования в компоненте
export const { useSubmitOrderMutation } = ordersApi;
