import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Search = ({ theme }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-results/${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex gap-3 px-4 mt-5 border mr-[30%] rounded-full lg:w-[700px] h-[50px] text-md focus:outline-none
      ${theme === "light" ? "bg-slate-50" : "bg-slate-950"}
      `}
    >
      <div className="flex gap-3 items-center w-full">
        <CiSearch />
        <input
          onChange={(e) => setQuery(e.target.value)}
          className={`w-full outline-none border-none h-full
          ${theme === "light" ? "bg-slate-50" : "bg-slate-950"}
          `}
          type="text"
          placeholder="Search a movie..."
        />
      </div>
    </form>
  );
};

export default Search;
