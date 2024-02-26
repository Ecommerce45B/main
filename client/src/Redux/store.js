import { configureStore } from '@reduxjs/toolkit'

import ProductsSlice from "./ProductsSlice";
import CarritoSlice from "./CarritoSlice"

const store = configureStore({
  reducer: {
    products: ProductsSlice,
    productsCarrito: CarritoSlice
  },
})

export default store;
