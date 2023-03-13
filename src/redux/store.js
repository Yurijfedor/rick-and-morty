import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "./charactersSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    filter: filterReducer,
  },
});
