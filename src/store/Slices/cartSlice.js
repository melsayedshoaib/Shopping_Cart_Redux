import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      let mainCart = state.cart.filter((item) => item.id === action.payload.id);
      if (mainCart < 1) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const mainCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { cart: mainCart, cartLength: mainCart.length };
    },
    increaseCart: (state, action) => {
      let mainCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { cart: mainCart, cartLength: mainCart.length };
    },
    decreaseCart: (state, action) => {
      let mainCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return { cart: mainCart, cartLength: mainCart.length };
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeFromCart,
  increaseCart,
  decreaseCart,
} = cartSlice.actions;

export default cartSlice.reducer;
