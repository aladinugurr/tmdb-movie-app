import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDraggable } from "react-use-draggable-scroll";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [currentlyWatchingList, setCurrentlyWatchingList] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const ref = useRef();
  const { events } = useDraggable(ref); // pass the reference to the useDraggable hook

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
              <Link key={item.id} to={`/movie/${item.id}`}>
                <img
                  className="w-[177px] h-[263px] rounded-[1.5rem]"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.original_title}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-wrap">
          <h3 className="text-lg font-bold mb-3">Suggested to Watch</h3>
          <div className="flex gap-4 flex-wrap">
            {topRatedMovies.map((item) => (
              <Link key={item.id} to={`/movie/${item.id}`}>
                <img
                  className="w-[177px] h-[263px] rounded-[1.5rem]"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.original_title}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-20 py-10">
        <h3 className="text-lg font-bold mb-3">Popular Movies</h3>
        <div
          className="flex gap-4 flex-nowrap overflow-x-scroll no-scrollbar"
          ref={ref}
          {...events}
        >
          {popularMovies.map((item) => (
            <Link key={item.id} to={`/movie/${item.id}`}>
              <img
                className="w-[177px] max-w-max h-[263px] rounded-[1.5rem]"
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt=""
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
