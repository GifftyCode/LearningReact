import React from "react";
import { FaTrash } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
      <label className="flex items-center space-x-3">
        <input
          onChange={() => handleCheck(item.id)}
          type="checkbox"
          className="h-5 w-5 text-indigo-600"
          checked={item.checked}
        />

        <span
          style={item.checked ? { textDecoration: "line-through" } : null}
          onDoubleClick={() => handleCheck(item.id)}
          className="text-lg"
        >
          {item.item}
        </span>
      </label>
      <FaTrash
        onClick={() => handleDelete(item.id)}
        className="text-red-500 hover:text-red-700 cursor-pointer "
        role="button"
        tabIndex="0"
      />
    </li>
  );
};

export default LineItem;
