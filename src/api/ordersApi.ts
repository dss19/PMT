import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Создаем API с помощью RTK Query
export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ // Укажите ваш базовый URL
    baseUrl: '/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    // Определяем mutation для отправки заказа
    submitOrder: builder.mutation({
      query: (orderData) => ({
        url: 'order.php',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData), // Преобразуем в JSON
      }),
    }),
  }),
});

// Экспортируем хук для использования в компоненте
export const { useSubmitOrderMutation } = ordersApi;
