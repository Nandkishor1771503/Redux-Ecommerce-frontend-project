import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from '../fearures/cart/cartSlice.js'
import productSlice from "../fearures/cart/productSlice.js";
import cartSlice from "../fearures/cart/cartSlice.js";
import buynowSlice from "../fearures/cart/buynowSlice.js";
import myOrderSlice from "../fearures/cart/myOrdersSlice.js";
import reviewSlice from "../fearures/cart/reviewSlice.js";
import  categorySlice  from "../fearures/cart/categorySlice.js";
import  searchSlice  from "../fearures/cart/searchSlice.js";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    buy: buynowSlice,
    order: myOrderSlice,
    reviews: reviewSlice,
    category:categorySlice,
    search:searchSlice
  },
});
