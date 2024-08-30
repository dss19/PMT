// src/store/menuSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
    isMenuOpen: boolean;
}

const initialState: MenuState = {
    isMenuOpen: false,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu(state) {
            state.isMenuOpen = !state.isMenuOpen;
        },
        setMenuState(state, action: PayloadAction<boolean>) {
            state.isMenuOpen = action.payload;
        },
    },
});

export const { toggleMenu, setMenuState } = menuSlice.actions;
export default menuSlice.reducer;
