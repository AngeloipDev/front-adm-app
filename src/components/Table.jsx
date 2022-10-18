import styles from "../styles/Table.module.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdCloudUpload, MdCloudDownload } from "react-icons/md";
import { Input } from "./Input";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { IconButton } from "./IconButton";

export const Table = ({ data, setData, items }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [forcePage, setForcePage] = useState(-1);
  const [loadForce, setLoadForce] = useState(true);
  const columns = ["User", "Email", "Date", "Actions"];
  const [query, setQuery] = useState("");
  const entries = [5, 10, 20];

  const handlePageClick = (event) => {
    setForcePage(event.selected);
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  useEffect(() => {
    if (pageCount > 0 && itemOffset > 0) {
      setForcePage(0);
      setItemOffset(0);
    }
  }, [itemsPerPage]);

  useEffect(() => {
    if (pageCount > 0 && loadForce) {
      setForcePage(0);
      setLoadForce(false);
    }
  }, [pageCount]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setData(
      items.filter((user) => user.name.toLowerCase().includes(e.target.value))
    );
    if (forcePage > 0) {
      setForcePage(0);
      setItemOffset(0);
    }
  };

  const onChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
  };

  return (
    <>
      <div className={styles.gridContainer}>
        <header className={styles.gridHeader}>
          <div className={styles.gridSearch}>
            <Input
              type="text"
              text="Search Here!"
              name="search"
              icon={<HiOutlineSearch color={"#0000008a"} size={18} />}
              onChange={handleChange}
            />
          </div>

          <div className={styles.gridEntries}>
            <span>Mostrar</span>
            <Input
              type="select"
              name="entries"
              onChange={onChange}
              options={entries}
            />
            <span>entradas</span>
          </div>

          <div className={styles.gridOptions}>
            <IconButton
              icon={<MdCloudUpload size={24} fill={"#0000008a"} />}
              text={"Cargar XLXS"}
            />
            <IconButton
              icon={<MdCloudDownload size={24} fill={"#0000008a"} />}
              text={"Descargar XLSX"}
            />
          </div>
        </header>

        <main className={styles.gridWrapper}>
          <table className={styles.gridTable}>
            <thead className={styles.gridThead}>
              <tr className={styles.gridTr}>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className={`${styles.gridTh} ${styles.gridThSort}`}
                  >
                    <span className={styles.gridThContent}>{column}</span>
                    <IconButton icon={<FiArrowUp color={"#0000008a"} />} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.gridTbody}>
              {currentItems.map((user, index) => (
                <tr key={index} className={styles.gridTr}>
                  <td data-label={columns[0]} className={styles.gridTd}>
                    {user.name}
                  </td>
                  <td data-label={columns[1]} className={styles.gridTd}>
                    {user.email}
                  </td>
                  <td data-label={columns[2]} className={styles.gridTd}>
                    {user.date}
                  </td>
                  <td data-label={columns[3]} className={styles.gridTd}>
                    <div className={styles.tdActions}>
                      <IconButton
                        icon={<FaEye size={18} fill={"#58AD69"} />}
                        text={"Visualizar"}
                      />
                      <IconButton
                        icon={<FaEdit size={18} fill={"#ffa500"} />}
                        text={"Editar"}
                      />
                      <IconButton
                        icon={<FaTrash size={18} fill={"#E2574C"} />}
                        text={"Eliminar"}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>

        <footer className={styles.gridFooter}>
          <div className={styles.gridPagination}>
            <div className={styles.gridSummary}>
              Mostrando del <b>{itemOffset + 1}</b> al{" "}
              <b>{itemOffset + currentItems.length}</b> de <b>{data.length}</b>{" "}
              resultados
            </div>
            <div className={styles.gridPages}>
              <ReactPaginate
                breakLabel="···"
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName={styles.pagContainer}
                pageLinkClassName={styles.pagNum}
                pageClassName={styles.pagNumContainer}
                previousClassName={styles.pagPrev}
                previousLinkClassName={styles.pagNum}
                nextClassName={styles.pageNext}
                nextLinkClassName={styles.pagNum}
                disabledClassName={styles.disabledBtn}
                activeLinkClassName={styles.pagActive}
                forcePage={forcePage}
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
