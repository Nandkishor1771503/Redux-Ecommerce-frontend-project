import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ordersList: [],
  ordersCount: 0,
};

export const myOrders = createSlice({
  name: "myOrders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.ordersList.push(action.payload);
      state.ordersCount++
    },
    cancelOrder:(state,action)=>{
        state.ordersList=state.ordersList.filter((order)=>order.id!==action.payload)
        if (state.ordersCount>0) {
            state.ordersCount--
        }
    }
  },
});

export const { addOrder,cancelOrder } = myOrders.actions;
export default myOrders.reducer;
