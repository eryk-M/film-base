import React from "react";

import ReactPaginate from "react-paginate";

const Paginate = props => {
  return (
    <ReactPaginate
      previousLabel={"\u2190"}
      nextLabel={"\u2192"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={props.totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={props.handlePageClick}
      containerClassName={"main__pagination"}
      subContainerClassName={"main__pages main__pagination"}
      activeClassName={"main__pagination-active"}
    />
  );
};

export default Paginate;
