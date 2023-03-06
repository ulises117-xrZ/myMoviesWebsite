import MovieList from "@/components/Layout/MovieList";
import { Movie } from "@/model/movie";
import { store } from "@/redux/index.store";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FavoritoScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    setMovies(store.getState().favouriteMovies);
    return () => {};
  }, [store.getState().favouriteMovies]);
  return (
    <div>
      <nav className="nav_bar">
        <div>
          <Link to="/">
            <h4>Home</h4>
          </Link>
        </div>
      </nav>
      <div>
        <h2>Favorites</h2>
        {movies.length === 0 && (
          <div className="d-flex justify-content-center text-center align-items-center">
            <h4>No hay favoritos</h4>
          </div>
        )}
        <MovieList movieList={movies} />
      </div>
    </div>
  );
};

export default FavoritoScreen;
