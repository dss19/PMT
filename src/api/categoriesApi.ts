// src/store/api/categoriesApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import  ICategory from '../models/ICaterogy';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => '/categories',
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
