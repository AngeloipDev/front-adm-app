import { useEffect, useState } from "react";
import { Table } from "./components/Table";
import items from "./data.json";
import style from "./styles/Select.module.css";

function App() {
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const onChange = (e) => {
    setItemsPerPage(e.target.value);
  };

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
    <div className="App" style={{ margin: "10px" }}>
      <div className={style.selectBox}>
        <select name="" id="" onChange={onChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <button onClick={addItem}>ADD</button>

      <br />
      <br />
      <Table
        itemsPerPage={parseInt(itemsPerPage)}
        data={data}
        setData={setData}
        items={items}
      />
    </div>
  );
}

export default App;
