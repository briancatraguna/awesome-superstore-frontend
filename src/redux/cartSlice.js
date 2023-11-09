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
    addQuantity(state, action) {
      const find_id = action.payload.id;
      var newCart = state.cart;
      for (var i = 0; i < newCart.length; i++) {
        if (newCart[i].id === find_id) {
          newCart[i].quantity++;
          break;
        }
      }
      state.cart = newCart;
    },
    removeProductFromCartAndSelection(state, action) {
      const find_id = action.payload.id;
      var newSelectedProducts = state.selectedProducts;
      for (var i = 0; i < newSelectedProducts.length; i++) {
        if (newSelectedProducts[i] == find_id) {
          newSelectedProducts.splice(i, 1);
          break;
        }
      }
      var newCart = state.cart;
      for (var i = 0; i < newCart.length; i++) {
        if (newCart[i].id === find_id) {
          newCart.splice(i, 1);
          break;
        }
      }
      state.cart = newCart;
      state.selectedProducts = newSelectedProducts;
    },

    removeQuantity(state, action) {
      const find_id = action.payload.id;
      var newCart = state.cart;
      for (var i = 0; i < newCart.length; i++) {
        if (newCart[i].id === find_id) {
          newCart[i].quantity--;
          state.cart = newCart;
          if (newCart[i].quantity === 0) {
            cartSlice.caseReducers.removeProductFromCartAndSelection(
              state,
              action
            );
          }
          break;
        }
      }
    },
  },
});

export const {
  setAllProducts,
  updateCart,
  updateSelectedProducts,
  addQuantity,
  removeQuantity,
  removeProductFromCartAndSelection,
} = cartSlice.actions;
export default cartSlice.reducer;
