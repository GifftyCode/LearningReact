import React, { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );

  const [newItems, setNewItems] = useState("");
  const [search, setSearch] = useState("");

  const handleSetAndSave = (newItem) => {
    setItems(newItem);
    localStorage.setItem("shoppingList", JSON.stringify(newItem));
  };

  const handleAdd = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItems = { id, checked: false, item };
    const listItems = [...items, myNewItems];
    handleSetAndSave(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    handleSetAndSave(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    handleSetAndSave(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newItems);
    setNewItems("");
  };

  return (
    <>
      <Header title="Gloceries List" />
      <AddItem
        newItems={newItems}
        setNewItems={setNewItems}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}

export default App;
