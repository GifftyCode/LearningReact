import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItems, setNewItems, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form
      className="max-w-md mx-auto mt-6 flex items-center gap-2"
      onSubmit={handleSubmit}
    >
      <label htmlFor="addItem" className="sr-only">
        Add Item
      </label>

      <input
        autoFocus
        ref={inputRef}
        type="text"
        id="addItem"
        required
        className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
        placeholder="Add an item..."
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
      />

      <button
        type="submit"
        aria-label="Add Item"
        className="p-2.5 text-white bg-gray-300 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-lg text-sm transition duration-150"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
