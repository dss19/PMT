import { combineReducers, configureStore } from '@reduxjs/toolkit';
import MenuSlice from './reducers/MenuSlice';

const rootReducer = combineReducers({
    MenuSlice
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type Appstore = ReturnType<typeof setupStore>
export type AppDispatch = Appstore['dispatch']