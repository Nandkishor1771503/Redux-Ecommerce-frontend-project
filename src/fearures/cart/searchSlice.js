import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchReq: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.searchReq = action.payload;
    },
  },
});

export const { searchProduct } = searchSlice.actions;
export default searchSlice.reducer;
