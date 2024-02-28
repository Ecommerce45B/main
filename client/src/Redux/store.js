import { configureStore } from '@reduxjs/toolkit'

import ProductsSlice from "./ProductsSlice";
import VotosSlice    from "./VotosSlice"

const store = configureStore({
  reducer: {
    products: ProductsSlice,
    votos   : VotosSlice
  },
})

export default store;
