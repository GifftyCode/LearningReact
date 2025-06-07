import React from "react";

const InputColor = ({ name, setName }) => {
  return (
    <form
      className="w-full max-w-md flex items-center gap-2 mt-12"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="addItem" className="sr-only">
        Enter color Name
      </label>
      <input
        autoFocus
        type="text"
        id="setColor"
        required
        className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
        placeholder="Enter Color Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default InputColor;
