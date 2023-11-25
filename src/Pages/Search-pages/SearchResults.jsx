import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieList from "../../components/MovieList";

const SearchResults = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const params = useParams();

  const getSearchedMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${params.name}&api_key=${process.env.REACT_APP_API_URL}`
    );
    const data = await response.json();
    setSearchedMovies(data.results);
  };

  useEffect(() => {
    getSearchedMovies();
  }, [params.name]);
  return <MovieList movieList={searchedMovies} />;
};

export default SearchResults;
