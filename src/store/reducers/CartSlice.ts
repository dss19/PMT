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

// Функция для сохранения состояния корзины в localStorage
const saveToLocalStorage = (state: CartState) => {
  localStorage.setItem('cartItems', JSON.stringify(state.items));
  localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
  localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 1. Добавление товара в корзину (или обновление, если уже есть)
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity; // Обновляем количество
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity }); // Добавляем новый товар
      }

      state.totalQuantity += action.payload.quantity;
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      saveToLocalStorage(state);
    },

    // 2. Инкремент количества товара в корзине
    incrementItemQuantity(state, action: PayloadAction<string>) {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += existingItem.price;
      }

      saveToLocalStorage(state);
    },

    // 3. Декремент количества товара в корзине
    decrementItemQuantity(state, action: PayloadAction<string>) {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }

      saveToLocalStorage(state);
    },

    // 4. Удаление товара из корзины
    removeItemFromCart(state, action: PayloadAction<string>) {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }

      saveToLocalStorage(state);
    },

    // 5. Полная очистка корзины
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveToLocalStorage(state);
    },
  },
});

export const {
  addItemToCart,
  incrementItemQuantity,
  decrementItemQuantity,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
