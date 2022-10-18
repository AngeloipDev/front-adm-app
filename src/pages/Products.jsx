import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Table } from "../components/Table";
import items from "../data.json";
import style from "../styles/Products.module.css";

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
    <div className={style.productsContainer}>
      <Header text={"Productos"} />
      <div style={{ margin: "10px" }}>
        <button onClick={addItem}>ADD</button>

        <br />
        <br />
        <Table data={data} setData={setData} items={items} />
      </div>
    </div>
  );
};
