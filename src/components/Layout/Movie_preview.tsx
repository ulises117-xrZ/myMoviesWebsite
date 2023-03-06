import useRequest from "@/hooks/useRequest";
import { Movie } from "@/model/movie";
import { IMAGE_PATH, getMovieDetails } from "@/services/path.services";
import React, { useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { FcRating } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
interface MoviePreviewProps {
  movie: Movie;
}

const MoviePreview: React.FC<MoviePreviewProps> = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.id}`)
  };


  return (
    <>
      <div className="movie_preview_item" onClick={handleClick}>
        <h3 className="title">{movie.title}</h3>
        <img
          src={`${IMAGE_PATH}${movie.poster_path}`}
          className="movie_preview_poster"
        />
        <h4>{movie.release_date}</h4>
        <div className="overview">
          <h4>Overview</h4>
          <p>{movie.overview.substring(0, 60)}...</p>
        </div>
        <div className="rate">
          <FcRating className="" />
          {movie.vote_average}
        </div>
      </div>
    </>
  );
};

export default MoviePreview;
