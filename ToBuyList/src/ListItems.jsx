import React from "react";
import LineItem from "./LineItem";

const ListItems = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ListItems;
