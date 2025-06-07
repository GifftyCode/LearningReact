import ListItems from "./ListItems";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ListItems
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p className="mt-6">List Is Empty!!!</p>
      )}
    </>
  );
};

export default Content;
