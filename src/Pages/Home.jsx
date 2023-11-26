import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDraggable } from "react-use-draggable-scroll";
import MovieListWithScroll from "../components/MovieListWithScroll";
import Movie from "../components/Movie";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [currentlyWatchingList, setCurrentlyWatchingList] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  // get popular movies
  const getLatest = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_URL}`
    );
    const data = await res.json();
    setTopRatedMovies(data.results.slice(0, 4));

    // get first 2 item from popular movies and set it as currently watching
    const currentList = data.results.slice(0, 2);
    setCurrentlyWatchingList(currentList);
  };

  const getPopular = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_URL}`
    );
    const data = await res.json();
    setPopularMovies(data.results);
  };

  // when component mounted there is works
  useEffect(() => {
    getLatest();
    getPopular();
  }, []);

  return (
    <div>
      <div className="flex w-full justify-between px-20 py-10 flex-wrap">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-3">Currently Watching</h3>
          <div className="flex gap-4 flex-wrap">
            {currentlyWatchingList.map((item) => (
              <Movie movie={item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-wrap">
          <h3 className="text-lg font-bold mb-3">Suggested to Watch</h3>
          <div className="flex gap-4 flex-wrap">
            {topRatedMovies.map((item) => (
              <Movie movie={item} />
            ))}
          </div>
        </div>
      </div>
      <MovieListWithScroll
        movieList={popularMovies}
        title="Popular Movies"
        className="px-20"
      />
    </div>
  );
};

export default Home;
