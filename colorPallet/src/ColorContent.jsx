import React from "react";

const ColorContent = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <div
      className="w-full max-w-2xl h-64 mt-6 border-2 border-gray-300 rounded-lg
      flex items-center justify-center text-gray-500 text-lg"
      style={{
        backgroundColor: colorValue || "transparent",
        color: isDarkText ? "#fff" : "#000",
      }}
    >
      <div className="flex flex-col space-y-2">
        <p>{colorValue ? `${colorValue}` : "Invalid Color"}</p>
        <p>{hexValue ? `${hexValue}` : null}</p>
      </div>
    </div>
  );
};

export default ColorContent;
