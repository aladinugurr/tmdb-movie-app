import React from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";

const MovieList = ({ movieList }) => {
  return (
    <div className="m-5 p-5 flex flex-wrap gap-5 items-center justify-center lg:justify-start">
      {movieList.map((movie) => {
        return <Movie movie={movie} className="relative" />;
      })}
    </div>
  );
};

export default MovieList;
