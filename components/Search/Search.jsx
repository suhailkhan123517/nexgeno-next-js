"use client";

import { MdSearch } from "react-icons/md";

const Search = ({ placeholder, setQuery }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg w-max bg-[#f8f9fa]">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent border-none outline-none"
      />
    </div>
  );
};

export default Search;
