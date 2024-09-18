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
  categoryslug: string;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
  totalQuantity: JSON.parse(localStorage.getItem('totalQuantity') || '0'),
  totalPrice: JSON.parse(localStorage.getItem('totalPrice') || '0'),
};

const saveToLocalStorage = (state: CartState) => {
  localStorage.setItem('cartItems', JSON.stringify(state.items));
  localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
  localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOrUpdateItem(state, action: PayloadAction<{ id: string; item: CartItem; quantity: number }>) {
      const { id, item, quantity } = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.id === id);      

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity });
      }

      state.totalQuantity += 1;
      state.totalPrice = state.items.reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      );
      saveToLocalStorage(state);
    },
    removeFromCart(state, action: PayloadAction<{ id: string; quantity?: number }>) {
      const { id, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity > quantity) {
          existingItem.quantity -= quantity;
          state.totalQuantity -= quantity;
        } else {
          state.totalQuantity -= existingItem.quantity;
          state.items = state.items.filter((item) => item.id !== id);
        }
      }

      state.totalPrice = state.items.reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      );
      saveToLocalStorage(state);
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveToLocalStorage(state);
    },
  },
});

export const { addOrUpdateItem, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
