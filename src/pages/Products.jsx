import { useEffect, useState } from "react";
import { Table } from "../components/Table";
import items from "../data.json";

export const Products = () => {
  const [data, setData] = useState([]);
  const addItem = () => {
    setData([
      ...data,
      { name: "Angelo", email: "angelo.inga@unmsm.edu.pe", date: "22/07/1999" }
    ]);
  };

  useEffect(() => {
    setData(items);
  }, []);

  return (
    <div style={{ margin: "10px" }}>
      <button onClick={addItem}>ADD</button>

      <br />
      <br />
      <Table data={data} setData={setData} items={items} />
    </div>
  );
};
