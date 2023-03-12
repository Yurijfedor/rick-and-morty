import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllCharacters } from "./operations";
import {
  fetchAllCharactersSuccessReducer,
  pendingReducer,
  rejectedReducer,
  fulfilledReducer,
} from "./reducers";

const extraActions = [fetchAllCharacters];

const getActions = (type) => extraActions.map((action) => action[type]);

const charactersInitialState = {
  characters: [],
  isLoading: false,
  error: null,
  filterValue: "",
};

const charactersSlice = createSlice({
  name: "characters",
  initialState: charactersInitialState,
  reducers: {
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCharacters.fulfilled, fetchAllCharactersSuccessReducer)
      .addMatcher(isAnyOf(...getActions("pending")), pendingReducer)
      .addMatcher(isAnyOf(...getActions("rejected")), rejectedReducer)
      .addMatcher(isAnyOf(...getActions("fulfilled")), fulfilledReducer);
  },
});

export const { setFilterValue } = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
