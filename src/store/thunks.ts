// src/store/thunks/categoriesThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import ICategory from '../models/ICaterogy';

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetch('http://localhost:4000/categories');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: ICategory[] = await response.json();
        return data;
    }
);