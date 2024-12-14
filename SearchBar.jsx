import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./SearchBar.css";

const SearchBar = () => {
    const [active, setActive] = useState(true);
  return (
    <div className="container flex items-center justify-center">
      <div className="search flex items-center justify-center relative">
        <input
          className={active?`input active focus:outline-none rounded-full`:`input rounded-full border-none focus:outline-none`}
          type="text"
          placeholder="Search for products..."
        />
        <button
        onClick={() => setActive(!active)}
          type="submit"
          className="btn rounded-full hover:bg-gray-200 hover:text-gray-900 active:text-sky-500"
        >
          <IoSearchOutline />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
