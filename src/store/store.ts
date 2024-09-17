import { combineReducers, configureStore } from '@reduxjs/toolkit';
import MenuSlice from './reducers/MenuSlice';
import CartSlice from './reducers/CartSlice';
import { categoriesApi } from '../api/categoriesApi'; // Импортируем API slice для категорий

const rootReducer = combineReducers({
    MenuSlice,
    CartSlice,
    [categoriesApi.reducerPath]: categoriesApi.reducer, // Добавляем редьюсер для RTK Query API
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(categoriesApi.middleware), // Добавляем middleware для RTK Query
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
