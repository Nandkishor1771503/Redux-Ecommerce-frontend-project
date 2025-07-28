import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

function getData() {
  return api.get("/");
}

export const fetchData = createAsyncThunk("products/fetchData", async () => {
  try {
    const res = await getData();
    return res.data;
  } catch (error) {
    // console.log(error);
  }
});

const initialState = {
  products: [],
  loading: true,
  error: null,
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = action.payload.products;
    });
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.products = action.error;
    });
  },
});

export default productSlice.reducer;
