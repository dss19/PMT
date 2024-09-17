import { createAsyncThunk } from '@reduxjs/toolkit';
import ICategory from '../models/ICaterogy';

export const fetchCategories = createAsyncThunk<ICategory[], void>(
    'categories/fetchCategories',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:4000/categories');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return (await response.json()) as ICategory[];
        } catch (error) {
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    }
);