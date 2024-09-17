// src/store/slices/categoriesSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from '../thunks';
import ICategory from '../../models/ICaterogy';

interface CategoriesState {
    categories: ICategory[];
    loading: boolean;
    error: string | null;
}

const initialState: CategoriesState = {
    categories: [],
    loading: false,
    error: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loading = false;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch categories';
            });
    },
});

export default categoriesSlice.reducer;