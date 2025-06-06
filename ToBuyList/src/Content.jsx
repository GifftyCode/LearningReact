import ListItems from "./ListItems";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className="flex-1 p-6 max-w-3xl mx-auto w-full">
      {items.length ? (
        <ListItems
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p className="mt-6">List Is Empty!!!</p>
      )}
    </main>
  );
};

export default Content;
