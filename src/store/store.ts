import { combineReducers, configureStore } from '@reduxjs/toolkit';
import MenuSlice from './reducers/MenuSlice';
import CartSlice from './reducers/CartSlice';
import ProductsSlice from './reducers/ProductsSlice';

const rootReducer = combineReducers({
    MenuSlice,
    CartSlice,
    ProductsSlice
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type Appstore = ReturnType<typeof setupStore>
export type AppDispatch = Appstore['dispatch']