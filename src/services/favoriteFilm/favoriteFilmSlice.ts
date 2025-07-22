import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TypeFilmParams } from "../../types";

type TypeInitialState = {
  films: TypeFilmParams[];
};

const initialState: TypeInitialState = {
  films: [],
};

export const favoriteFilmSlice = createSlice({
  name: "filmStorage",
  initialState,
  reducers: {
    added: (state, action: PayloadAction<TypeFilmParams>) => {
      const filmExist = state.films.some(
        (film) => film.imdbID === action.payload.imdbID
      );
      if (!filmExist) {
        state.films.push(action.payload);
      }
    },

    remove: (state, action: PayloadAction<TypeFilmParams>) => {
      const filmRemove = state.films.filter(
        (film) => film.imdbID !== action.payload.imdbID
      );
      state.films = filmRemove;
    },
  },
});

export default favoriteFilmSlice.reducer;
export const { added, remove } = favoriteFilmSlice.actions;
