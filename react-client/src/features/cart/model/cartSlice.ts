import type { Product } from '@/shared/api';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  isOpen: boolean;
  cart: Product[];
}

const initialState: CartState = {
  isOpen: false,
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state: CartState) {
      state.isOpen = !state.isOpen;
    },

    addToCart(state: CartState, action: PayloadAction<Product>) {
      state.cart.push(action.payload);
    },

    removeFromCart(state: CartState, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { toggleCart, addToCart, removeFromCart } = cartSlice.actions;

export const selectCartIsOpen = (state: { cart: CartState }) => state.cart.isOpen;
export const selectCart = (state: { cart: CartState }) => state.cart.cart;
