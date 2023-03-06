import React, { useEffect, useState } from "react";
import "./styles/Home.scss";
import useRequest, { Results } from "@/hooks/useRequest";
import { currentPopularMovies, getSearch } from "@/services/path.services";
import { Movie } from "@/model/movie";
import { Result } from "node-sass";
import MovieList from "@/components/Layout/MovieList";
import { Link, useNavigate } from "react-router-dom";
import { SearchQuery, useForm } from "@/hooks/useForm.hook";
import { text } from "stream/consumers";
import LoadingComponent from "@/components/LoadingComponent";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteAll, logOut } from "@/redux/states";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [state, fetchRequest] = useRequest();
  const [search, fetchSearch] = useRequest();
  const [text, setText] = useState("Popular");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, handleInputChange } = useForm({
    key: "",
  });

  useEffect(() => {
    const value = values as unknown as SearchQuery;
    if (value.key.length == 0 && state.code === "200") {
      const data = state.data as unknown as Results;
      console.log(data.results);
      setMovies(data.results);
      setText("Popular")
    }
    if (value.key.length > 2) {
      fetchSearch(getSearch(value.key), "GET", {});
      setText(value.key);
    }
    console.log(value.key);
  }, [values]);

  useEffect(() => {
    if (search.code === "200") {
      const data = search.data as unknown as Results;
      console.log(data.results);
      setMovies(data.results);
    }
  }, [search]);

  useEffect(() => {
    fetchRequest(currentPopularMovies(), "GET", {});
    return () => {};
  }, []);

  useEffect(() => {
    if (state.code == "200") {
      const data = state.data as unknown as Results;
      console.log(data.results);
      setMovies(data.results);
      //   console.log(movies.map((x)=> x.));
    }
  }, [state]);

  return (
    <>
      <div>
        <nav className="nav_bar">
          <div>
            <Link to="/favorites">
              <h4>Favoritos</h4>
            </Link>
          </div>
          <input name="key" onChange={handleInputChange} placeholder="search" />
          <div className="d-flex align-items-center justify-content-evenly" onClick={()=>{
            dispatch(logOut(0))
            dispatch(deleteAll(0));
            navigate('/logIn')
          }}>
          <h4>Logout</h4>
          <AiOutlineLogout />
          </div>
        </nav>
        {state.isLoading || (search.isLoading && <LoadingComponent />)}
        <h2>{text}</h2>
        <MovieList movieList={movies} />
      </div>
    </>
  );
};

export default Home;
