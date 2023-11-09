import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  preloadedState: {
    auth: {
      accessToken: localStorage.getItem("accessToken"),
      customerId: localStorage.getItem("customerId"),
    },
    cart: {
      allProducts:
        localStorage.getItem("allProducts") === null
          ? []
          : JSON.parse(localStorage.getItem("allProducts")),
      cart:
        localStorage.getItem("cart") === null
          ? []
          : JSON.parse(localStorage.getItem("cart")),
      selectedProducts:
        localStorage.getItem("selectedProducts") === null
          ? []
          : JSON.parse(localStorage.getItem("selectedProducts")),
    },
  },
});

store.subscribe(() => {
  const { accessToken, customerId } = store.getState().auth;
  const { allProducts, cart, selectedProducts } = store.getState().cart;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("customerId", customerId);
  localStorage.setItem("allProducts", JSON.stringify(allProducts));
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
});

export default store;
