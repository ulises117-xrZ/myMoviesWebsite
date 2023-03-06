import { Movie } from "@/model/movie";
import React from "react";
import MoviePreview from "./Movie_preview";

interface MovieListProps {
  movieList: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movieList }: MovieListProps) => {
  return (
    <>
 
    <div className="movie_preview_container">
        
      {movieList.map((x) => {
          return <MoviePreview movie={x} />;
        })}
    </div>
        </>
  );
};

export default MovieList;
