import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  review: [],
};

export const customerReviews = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.review.push(action.payload);
    },
  },
});

export const { addReview } = customerReviews.actions

export default customerReviews.reducer

