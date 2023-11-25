import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieList from "../../components/MovieList";

const SearchByGenre = () => {
  const params = useParams();
  const [moviesByGenre, setMoviesByGenre] = useState([]);

  const getMoviesByGenre = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_URL}&with_genres=${id}`
    );
    const data = await response.json();
    setMoviesByGenre(data.results);
  };

  useEffect(() => {
    getMoviesByGenre(params.id);
  }, [params.id]);
  return <MovieList movieList={moviesByGenre} />;
};

export default SearchByGenre;
