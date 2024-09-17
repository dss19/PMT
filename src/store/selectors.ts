import { RootState } from './store';
export const selectCartState = (state: RootState) => state.CartSlice;
export const selectMenuState = (state: RootState) => state.MenuSlice;
