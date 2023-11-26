import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDraggable } from "react-use-draggable-scroll";

const MovieListWithScroll = ({ movieList, title, className }) => {
  const ref = useRef();
  const { events } = useDraggable(ref); // pass the reference to the useDraggable hook
  return (
    <div className={`py-10 ${className} relative`}>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <div
        className="flex gap-4 flex-nowrap overflow-x-scroll no-scrollbar"
        ref={ref}
        {...events}
      >
        {movieList.map((item) => (
          <Link
            key={item.id}
            to={`/movie/${item.id}`}
            className="relative group"
          >
            <img
              className="w-[177px] max-w-max h-[263px] rounded-[1.5rem] hover:opacity-100"
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt=""
            />
            <div className="group-hover:opacity-100 rounded-b-[1.5rem] transition-opacity duration-300 ease-in-out opacity-0 absolute bottom-0 right-0 left-0 px-4 py-2 flex justify-between items-center w-full h-auto rounded-b-lg text-amber-300">
              <p>{item.original_title}</p>
              <span>{item.vote_average.toFixed(1)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieListWithScroll;
