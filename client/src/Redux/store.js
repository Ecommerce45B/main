import { configureStore } from "@reduxjs/toolkit";

import ProductosSlice from "./ProductosSlice";
import CarritoSlice from "./CarritoSlice";
import VotosSlice from "./VotosSlice";

const store = configureStore({
  reducer: {
    productos: ProductosSlice,
    productsCarrito: CarritoSlice,
    votos: VotosSlice,
  },
});

export default store;
