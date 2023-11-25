import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movieList }) => {
  return (
    <div className="m-5 p-5 flex flex-wrap gap-5 items-center justify-center lg:justify-start">
      {movieList.map((movie) => {
        return (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="w-[90%] md:w-[200px] md:h-[290px] cursor-pointer relative"
          >
            <img
              className="rounded-2xl	"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div
              className="px-4 py-2 flex justify-between items-center absolute bg-slate-900 w-full h-auto
                  rounded-b-lg text-white bottom-[-10px] right-0 left-0"
            >
              <p>{movie.original_title}</p>
              <span>{movie.vote_average.toFixed(1)}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieList;
