import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  sku: string;
  description?: string;
  images: string[];
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
  totalQuantity: JSON.parse(localStorage.getItem('totalQuantity') || '0'),
};

const saveToLocalStorage = (state: CartState) => {
  localStorage.setItem('cartItems', JSON.stringify(state.items));
  localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
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
      saveToLocalStorage(state);
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
      saveToLocalStorage(state);
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      saveToLocalStorage(state);
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
