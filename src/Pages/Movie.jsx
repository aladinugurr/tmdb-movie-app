import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { useDraggable } from "react-use-draggable-scroll";
import ModalImage from "react-modal-image";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const [movieImages, setMovieImages] = useState([]);
  const [related, setRelated] = useState([]);
  const params = useParams();
  const ref = useRef();
  const { events } = useDraggable(ref); // pass the reference to the useDraggable hook

  const getMovieDetailsById = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_URL}`
    );
    const data = await response.json();
    setMovie(data);
  };

  const getImages = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_API_URL}`
    );
    const data = await response.json();
    setMovieImages(data.backdrops.slice(0, 10));
    console.log(data);
  };

  const getRelated = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_URL}`
    );
    const data = await response.json();
    setRelated(data.results.slice(0, 10));
  };

  useEffect(() => {
    getMovieDetailsById(params.id);
    getImages(params.id);
    getRelated(params.id);
  }, [params.id]);

  return (
    <div className="p-5">
      <div className="flex justify-between p-4">
        <div>
          <h2 className="text-lg font-bold mb-3">{movie.original_title}</h2>
          <div className="flex gap-4">
            <img
              className="w-[196px] h-[291px] rounded-[1.5rem]"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className="flex flex-col justify-evenly">
              <div className="flex">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-[20px] cursor-pointer border-2 border-black p-2 m-1 w-max"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <p className="w-[30vw] m-4">{movie.overview}</p>
              <div className="m-4 flex gap-5 text-center items-center">
                <div className="flex flex-col pl-4">
                  <span>IMDB Ratings</span>
                  <span>
                    ⭐️ {movie.vote_average?.toFixed(1)}
                    <span className="text-gray-600 text-xs"> / 10</span>
                  </span>
                </div>
                <p className="text-gray-600 text-xs">
                  {movie.vote_count / 1000}k Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="items-center gap-2 flex p-3 w-[250px] h-[50px] bg-gray-300 rounded-full">
            <FaRegBookmark />
            Add Watchlist
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-3">
          Images from {movie.original_title}
        </h3>
        <div
          className="flex gap-4 flex-nowrap overflow-x-scroll no-scrollbar"
          ref={ref}
          {...events}
        >
          {movieImages.map((item) => (
            <div key={item.id} to={`/movie/${item.id}`}>
              <ModalImage
                small={`https://image.tmdb.org/t/p/original/${item.file_path}`}
                large={`https://image.tmdb.org/t/p/original/${item.file_path}`}
                className="w-[177px] max-w-max h-[263px] rounded-[1.5rem] object-cover"
                alt={movie.original_title}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-3">
          Also other peoples watched these
        </h3>
        <div
          className="flex gap-4 flex-nowrap overflow-x-scroll no-scrollbar"
          ref={ref}
          {...events}
        >
          {related.map((item) => (
            <Link key={item.id} to={`/movie/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                className="w-[177px] max-w-max h-[263px] rounded-[1.5rem] object-cover"
                alt={movie.original_title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
