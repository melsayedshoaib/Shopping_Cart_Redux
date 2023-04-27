import cartSlice from "./Slices/cartSlice";
import productsSlice from "./Slices/productsSlice";
import singleProductSlice from "./Slices/singleProductSlice";

const { configureStore } = require("@reduxjs/toolkit");

export default configureStore({
  reducer: {
    productsSlice,
    singleProductSlice,
    cartSlice,
  },
});
