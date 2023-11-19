import React from 'react'
import Home from './Home'
import Movie from './Movie'
import { Route, Routes } from 'react-router-dom'

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  )
}

export default Pages
