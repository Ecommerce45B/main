import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./Slices/ProductSlice";
import votesReducer   from "./Slices/VotesSlice";

const store = configureStore({
  reducer: {
    product : productReducer,
    votes   : votesReducer,
  },
});

export default store;
