import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    allProducts: [],
    cart: [],
    selectedProducts: [],
  },
  reducers: {
    setAllProducts(state, action) {
      state.allProducts = action.payload;
    },
    updateSelectedProducts(state, action) {
      state.selectedProducts = action.payload;
    },
    updateCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const { setAllProducts, updateCart, updateSelectedProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
