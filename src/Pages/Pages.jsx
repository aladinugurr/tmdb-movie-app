import React from 'react'
import Home from './Home'
import Movie from './Movie'
import { Route, Routes } from 'react-router-dom'
import SearchResults from './SearchResults'

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search-results/:name" element={<SearchResults />} />
    </Routes>
  )
}

export default Pages
