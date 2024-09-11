import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, action: PayloadAction<{ id: string, quantity?: number }>) {
      const { id, quantity = 1 } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        if (existingItem.quantity > quantity) {
          existingItem.quantity -= quantity;
          state.totalQuantity -= quantity;
        } else {
          state.totalQuantity -= existingItem.quantity;
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

