import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  onChangePage: (page: number) => void;
  pageCurrent: number;
};

export const Pagination: React.FC<PaginationProps> = ({
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
      pageCount={2}
      forcePage={pageCurrent - 1}
    />
  );
};
