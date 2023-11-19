import React from 'react'
import Search from './Search'

import { MdLocalMovies } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex w-full justify-center md:justify-between items-center relative flex-wrap'>
        <Link to={'/'}>
        <h4 className='cursor-pointer p-3 mt-5 sm:ml-[10%] flex items-center gap-3'>The Movie Tracker <MdLocalMovies className='text-4xl' /></h4>
        </Link>
        <Search />
    </div>
  )
}

export default Navbar
