import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./Slices/orderSlice";

export const store = configureStore({
  reducer: {
    order: orderSlice,
  },
});
