import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form
      className="max-w-md mx-auto mt-6 flex items-center gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="addItem" className="sr-only">
        Search Item
      </label>

      <input
        autoFocus
        type="text"
        id="addItem"
        required
        className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
        placeholder="Search Item..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
