import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='flex items-center gap-3 px-4 mt-5 border mr-[30%] rounded-full lg:w-[700px] h-[50px] text-md focus:outline-none focus:border-gray-500'>
        <CiSearch />
        <input
        className='w-full outline-none border-none h-full'
        type="text"
        placeholder='Search a movie...' />
    </div>
  )
}

export default Search
