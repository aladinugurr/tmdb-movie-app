import React from "react";
import Home from "./Home";
import Movie from "./Movie";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./Search-pages/SearchResults";
import SearchByGenre from "./Search-pages/SearchByGenre";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/search-results/:name" element={<SearchResults />} />
      <Route path="/search-by-genre/:id" element={<SearchByGenre />} />
    </Routes>
  );
};

export default Pages;
