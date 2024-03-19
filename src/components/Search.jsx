import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect } from "react";

export default function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleClear();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("keyword", JSON.stringify(search));
    onSearch(search);
  };
  const handleClear = () => {
    setSearch("");
    localStorage.removeItem("keyword");
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
            type="text"
            name="Search"
            placeholder="Type to search"
            id="search"
            className="w-full h-12 py-2 pl-10 pr-4 border border-gray-300 focus:outline-none focus:border-blue-600 placeholder:font-title placeholder:text-gray-4"
            value={search || ""}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
