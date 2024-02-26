import { configureStore } from '@reduxjs/toolkit'

import ProductsSlice from "./ProductsSlice";

const store = configureStore({
  reducer: {
    products: ProductsSlice
  },
})

export default store;
