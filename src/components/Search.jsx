import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search({ search, setSearch }) {
  const [localSearch, setLocalSearch] = useState(search);
  useEffect(() => {
    if (localSearch === "") {
      setSearch(null);
      localStorage.setItem("search", JSON.stringify(null));
    }
  }, [localSearch, setSearch]);
  const handleSubmit = (event) => {
    event.preventDefault();
    let searchValue = event.target.elements.search.value;

    if (searchValue === "") {
      searchValue = null;
    }

    setSearch(searchValue);
    localStorage.setItem("search", JSON.stringify(searchValue));
  };

  return (
    <div className="flex items-center w-96 -ml-[150px]">
      <div className="relative w-full">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="search"
            className="absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <FaMagnifyingGlass size={18} className="text-gray-300" />
          </label>
          <input
            type="search"
            name="Search"
            placeholder="Type to search"
            id="search"
            className="w-full h-12 py-2 pl-10 pr-4 border border-gray-300 focus:outline-none focus:border-blue-600 placeholder:font-title placeholder:text-gray-4"
            value={localSearch || ""}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
