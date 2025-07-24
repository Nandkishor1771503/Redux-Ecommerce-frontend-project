import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProduct: [],
  loading: true,
  error: null,
};

export const cartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartProduct = action.payload;
      const existingItem = state.cartProduct.find(
        (e) => e.id === cartProduct.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartProduct.push({ ...cartProduct, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartProduct = state.cartProduct.filter((e) => e.id !== id);
    },
    clearCart: (state) => {
      state.cartProduct = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
