import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie, className }) => {
  return (
    <Link
      key={movie.id}
      to={`/movie/${movie.id}`}
      className={`${className} relative group`}
    >
      <img
        className="w-[177px] h-[263px] rounded-[1.5rem] hover:opacity-100"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className="group-hover:opacity-100 rounded-b-[1.5rem] transition-opacity duration-300 ease-in-out opacity-0 absolute bottom-0 right-0 left-0 px-4 py-2 flex justify-between items-center w-full h-auto rounded-b-lg text-amber-300">
        <p>{movie.original_title}</p>
        <span>{movie.vote_average.toFixed(1)}</span>
      </div>
    </Link>
  );
};

export default Movie;
