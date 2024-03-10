import { configureStore } from "@reduxjs/toolkit";

import ProductsSlice from "./ProductsSlice";
import CarritoSlice from "./CarritoSlice"
import VotosSlice    from "./VotosSlice"

const store = configureStore({
  reducer: {
    products: ProductsSlice,
    productsCarrito: CarritoSlice,
    votos   : VotosSlice
  },
});

export default store;
