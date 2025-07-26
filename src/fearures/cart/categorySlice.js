import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const initialState = {
  category: [],
  loading: true,
  error: false,
};

export const fetchRequiredData = createAsyncThunk(
  "categoryData",
  async (categorySlug) => {
    try {
      const res = await api.get(`/category/${categorySlug}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchRequiredData.fulfilled, (state, action) => {
      state.category = action.payload.products;
      (state.loading = false), (state.error = false);
    });
    builder.addCase(fetchRequiredData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchRequiredData.rejected, (state, action) => {
      (state.error = true), (state.loading = false);
    });
  },
});

// export const { fetchCategory } = categorySlice.actions;

export default categorySlice.reducer;
