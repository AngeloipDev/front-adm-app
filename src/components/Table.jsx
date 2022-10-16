import styles from "../styles/Table.module.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdCloudUpload, MdCloudDownload } from "react-icons/md";

export const Table = ({ itemsPerPage, data, setData, items }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const columns = ["User", "Email", "Date"];
  const [query, setQuery] = useState("");

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setData(
      items.filter((user) => user.name.toLowerCase().includes(e.target.value))
    );
  };

  return (
    <>
      <div className={styles.gridContainer}>
        <header className={styles.gridHeader}>
          <div className={styles.gridSearch}>
            <input
              type="text"
              name=""
              placeholder="Search Here!"
              onChange={handleChange}
            />
            <span>
              <HiOutlineSearch color={"#0000008a"} />
            </span>
          </div>

          <div className={styles.gridOptions}>
            <button className={styles.btnTooltip}>
              <MdCloudUpload size={24} fill={"#0000008a"} />
              <span className={styles.tooltip}>Cargar XLSX</span>
            </button>
            <button className={styles.btnTooltip}>
              <MdCloudDownload size={24} fill={"#0000008a"} />
              <span className={styles.tooltip}>Descargar XLSX</span>
            </button>
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
                    <button className={styles.gridSort}>btn</button>
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
                </tr>
              ))}
            </tbody>
          </table>
        </main>

        <footer className={styles.gridFooter}>
          <div className={styles.gridPagination}>
            <div className={styles.gridSummary}>
              Mostrando del <b>{itemOffset + 1}</b> al{" "}
              <b>{itemOffset + itemsPerPage}</b> de <b>{data.length}</b>{" "}
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
                activeLinkClassName={styles.pagActive}
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
