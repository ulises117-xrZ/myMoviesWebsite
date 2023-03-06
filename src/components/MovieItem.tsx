import { Cast } from "../model/actorModel";
import { Movie, MovieData } from "@/model/movie";
import { IMAGE_PATH } from "@/services/path.services";
import React, { useEffect, useState } from "react";
import ButtonDefault from "./Layout/button_default";
import { store } from "@/redux/index.store";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@/redux/states";
import { AppStore } from "@/redux/index.store";
import SuggestedMoviesCarousel from "./suggestedMovies";
import { Container, Row } from "react-bootstrap";

interface MovieItemProps {
  movie: MovieData | undefined;
  actors: Cast[];
  relatedMovies: Movie[];
}

const MovieItem: React.FC<MovieItemProps> = ({
  movie,
  actors,
  relatedMovies,
}) => {
  const { favouriteMovies } = useSelector((x: AppStore) => x);
  const dispatch = useDispatch();
  const [showFav, setShowFav] = useState<boolean>(true);
  useEffect(() => {
    const info = favouriteMovies.filter((x) => x.id === movie?.id);
    console.log(info);
    console.log(store.getState().favouriteMovies);
    setShowFav(info.length <= 0);
    return () => {};
  }, [favouriteMovies, movie]);
  return (
    <div className="movie_description">
      <div className="movie_content">
        <h1 className="movie_title">{movie?.title}</h1>
        <div className="movie_tags">
          {movie?.genres.map((gen) => (
            <div className="movie_tag" key={gen.id}>
              {gen.name}
            </div>
          ))}
        </div>
        {movie?.runtime} s<p className="movie_overview">{movie?.overview}</p>
        <h3>Actores</h3>
        <div className="movie_cast">
          {actors.map((act) => (
            <div>{`${act.name}| | `}</div>
          ))}
        </div>
        <br />
        {showFav ? (
          <button
            className="__button__"
            onClick={() => {
              dispatch(addFavorite(movie));
              setShowFav(true);
            }}
          >
            Add to favorite
          </button>
        ) : (
          <button
            className="__button__"
            onClick={() => {
              dispatch(removeFavorite(movie));
              setShowFav(false);
            }}
          >
            Remove favorite
          </button>
        )}
        <br />
        <div className="suggested_movies d-flex flex-column justify-content-center">
          <h4>Suggested Movies</h4>
          <SuggestedMoviesCarousel movies={relatedMovies} idM={movie?.id ?? 0} />
        </div>
      </div>
      <div className="movie_shadow"></div>
    </div>
  );
};

export default MovieItem;
