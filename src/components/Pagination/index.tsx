import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  onChangePage: any;
  pageCurrent: number;
};

const Pagination: React.FC<PaginationProps> = ({
  onChangePage,
  pageCurrent,
}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={pageCurrent - 1}
    />
  );
};

export default Pagination;
