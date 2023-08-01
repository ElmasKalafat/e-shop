import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import productSlice from "./productSlice";
import cardSlice from "./cardSlice";

export const store = configureStore({
  reducer: {
    categories: CategorySlice,
    products: productSlice,
    cards: cardSlice,
  },
});
