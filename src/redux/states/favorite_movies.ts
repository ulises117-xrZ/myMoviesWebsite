import { LocalStorageTypes } from "@/model/localStorage";
import { Movie } from "@/model/movie";
import { getLocalStorage, setLocalStorage } from "@/utils/local_storage.utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Movie[] = [];

export const favoriteMovieSlice = createSlice({
  name: LocalStorageTypes.FAVORITES,
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state: Movie[], action) => {
      if (state.find((x) => x.id === action.payload.id)) {
        return state;
      } else {
        setLocalStorage(LocalStorageTypes.FAVORITES, [
          ...state,
          action.payload,
        ]);
        return [...state, action.payload];
      }
    },
    removeFavorite: (state: Movie[], action) => {
     
        setLocalStorage(
          LocalStorageTypes.FAVORITES,
          state.filter((x) => x.id !== action.payload.id)
        );
        return state.filter((x) => x.id !== action.payload.id);
    },
    deleteAll: (state, action)=>{
      localStorage.clear();
      return initialState
    }
  },
});

export const { addFavorite, removeFavorite, deleteAll } = favoriteMovieSlice.actions;
