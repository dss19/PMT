import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICategory from '../models/ICaterogy';

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
  }),
});

// Экспортируем хуки, которые RTK Query автоматически генерирует
export const { useGetCategoriesQuery, useGetCategoryBySlugQuery } = categoriesApi;
