import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Movie } from "@/model/movie";
import { IMAGE_PATH } from "@/services/path.services";
import { useNavigate } from "react-router-dom";

interface SuggestedMoviesCarouselProps {
  movies: Movie[];
  idM: number
}

const SuggestedMoviesCarousel: React.FC<SuggestedMoviesCarouselProps> = ({
  movies,
  idM
}) => {
  const navigate = useNavigate()
  const handleClick = (id: number)=>{
    navigate(`/movie/${idM}/suggestion/${id}`)
  }

  return (
    <Carousel variant="dark">
      {movies.map((movie) => {
        return (
          <Carousel.Item onClick={()=> handleClick(movie.id)}>
            <img className="d-block w-100" src={`${IMAGE_PATH}${movie.backdrop_path}`} alt="poster" />
            <Carousel.Caption>
              <h4 className="text-white">{movie.title}</h4>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default SuggestedMoviesCarousel;
