import { createSelector } from "@reduxjs/toolkit";

export const selectCharacters = (state) => state.characters.characters;
export const selectFilterValue = (state) => state.characters.filterValue;
export const selectIsLoading = (state) => state.characters.isLoading;
export const selectError = (state) => state.characters.error;

export const selectVisibleCharacters = createSelector(
  [selectCharacters, selectFilterValue],
  (characters, filters) => {
    return characters.filter((character) =>
      character.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
