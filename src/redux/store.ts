import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./services/productApi";
import { orderApi } from "./services/orderApi";
import { authApi } from "./services/authApi"; // Add this
import { adminApi } from "./services/adminApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [authApi.reducerPath]: authApi.reducer, // Add this
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(orderApi.middleware)
      .concat(authApi.middleware)
      .concat(adminApi.middleware), // Add this
});
