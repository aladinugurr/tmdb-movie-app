import React, { useContext } from "react";
import Search from "./Search";

import { MdLocalMovies } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/context";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <div
      className={`flex w-full justify-center md:justify-between items-center relative flex-wrap
    ${theme === "light" ? "bg-slate-50" : "bg-slate-950 text-white"}
    `}
    >
      <Link to={"/"}>
        <h4 className="cursor-pointer p-3 mt-5 sm:ml-[10%] flex items-center gap-3">
          The Movie Tracker <MdLocalMovies className="text-4xl" />
        </h4>
      </Link>
      <Search theme={theme} />
      {theme == "light" ? (
        <FaMoon
          className="cursor-pointer text-4xl mr-10"
          onClick={() => handleTheme()}
        />
      ) : (
        <CiLight
          className="cursor-pointer text-4xl mr-10"
          onClick={() => handleTheme()}
        />
      )}
    </div>
  );
};

export default Navbar;
