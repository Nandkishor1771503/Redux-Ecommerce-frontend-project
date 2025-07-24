import { createSlice } from "@reduxjs/toolkit";

export const buynowSlice = createSlice({
  name: "buy",
  initialState: {
    product: null,
  },
  reducers: {
    productDetails: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { productDetails } = buynowSlice.actions;
export default buynowSlice.reducer;
