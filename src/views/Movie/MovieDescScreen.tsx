import LoadingComponent from "@/components/LoadingComponent";
import MovieItem from "@/components/MovieItem";
import useRequest from "@/hooks/useRequest";
import { Actors, Cast, Department } from "@/model/actorModel";
import { Movie, MovieData } from "@/model/movie";
import { Recomendation } from "@/model/related";
import { getCastMovie, getMovieDetails, getRelatedMovies } from "@/services/path.services";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const MovieDescScreen = () => {
  const [state, fetchRequest] = useRequest();
  const [actors, fetchActors] = useRequest();
  const [related, fetchRelated] = useRequest();
  const [cast, setCast] = useState<Cast[]>([]);
  const [movie, setMovie] = useState<MovieData>();
  const [relatedMovie, setRelatedMovie] = useState<Movie[]>([]);
  const { id, idSuggestion } = useParams();
  useEffect(() => {
    let identifier = id;
    if(idSuggestion !== undefined){
      identifier = idSuggestion;
    }
    fetchRequest(getMovieDetails(identifier ?? ""), "GET", {});
    fetchActors(getCastMovie(identifier ?? ""), "GET", {});
    fetchRelated(getRelatedMovies(identifier ?? ""), "GET", {});
    window.scrollTo(0,0)
    return () => {};
    
  }, [idSuggestion]);

  useEffect(()=>{
    if(related.code === "200"){
      const parsedData = related.data as unknown as Recomendation;
      console.log(parsedData.results);
      setRelatedMovie(parsedData.results);
    }
  }, [
    related
  ])


  useEffect(() => {
    if (actors.code === "200") {
      const parsedData: Actors = actors.data as unknown as Actors;
      const filtered = parsedData.cast.filter((cast)=> cast.known_for_department === Department.Acting);
      console.log(parsedData.cast[0]);
      setCast(filtered);
    }
  }, [actors]);

  useEffect(() => {
    if (state.code === "200") {
      const parsedData: MovieData = state.data as unknown as MovieData;
      setMovie(parsedData);
      console.log(parsedData.genres[0].name);
      console.log(state);
    }
  }, [state]);

  return (
    <div>
      {state.isLoading && actors.isLoading && <LoadingComponent />}
      <MovieItem movie={movie} actors={cast} relatedMovies={relatedMovie}/>
    </div>
  );
};

export default MovieDescScreen;
