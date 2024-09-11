import { combineReducers, configureStore } from '@reduxjs/toolkit';
import MenuSlice from './reducers/MenuSlice';
import CartSlice from './reducers/CartSlice';

const rootReducer = combineReducers({
    MenuSlice,
    CartSlice
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type Appstore = ReturnType<typeof setupStore>
export type AppDispatch = Appstore['dispatch']