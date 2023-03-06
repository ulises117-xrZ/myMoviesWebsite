import { configureStore } from "@reduxjs/toolkit";
import { favoriteMovieSlice, authSlice } from "./states/index";
import { Movie } from "@/model/movie";
import { LoginU } from "@/model/user";


export interface AppStore {
  favouriteMovies: Movie[];
  auth: LoginU;
}

export const store = configureStore<AppStore>({
  reducer: {
    favouriteMovies: favoriteMovieSlice.reducer,
    auth: authSlice.reducer
  },
});