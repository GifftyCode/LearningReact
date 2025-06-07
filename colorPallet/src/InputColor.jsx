import ColorNames from "colornames";
import React from "react";

const InputColor = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
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
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(ColorNames(e.target.value));
        }}
      />

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDarkText}
          onChange={() => setIsDarkText(!isDarkText)}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-gray-300"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Toggle Text Color
        </span>
      </label>
    </form>
  );
};

export default InputColor;
