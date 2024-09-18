import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICategory from '../models/ICaterogy';
import IProduct from '../models/IProduct';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }), // Убедись, что URL корректен
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => 'categories',
    }),
    getCategoryBySlug: builder.query<ICategory, string>({
      query: (slug) => `categories/${slug}`,
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

// Экспортируем хуки, которые RTK Query автоматически генерирует
export const { useGetCategoriesQuery, useGetCategoryBySlugQuery, useGetProductByIdQuery } = categoriesApi;
