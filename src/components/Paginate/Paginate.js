import React from "react";

import ReactPaginate from "react-paginate";

const Paginate = props => {
  const width = window.innerWidth;
  return (
    <ReactPaginate
      forcePage={props.selected}
      previousLabel={"\u2190"}
      nextLabel={"\u2192"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={props.totalPages}
      marginPagesDisplayed={width < 768 ? 1 : 2}
      pageRangeDisplayed={width < 768 ? 1 : 5}
      onPageChange={props.handlePageClick}
      containerClassName={"main__pagination"}
      subContainerClassName={"main__pages main__pagination"}
      activeClassName={"main__pagination-active"}
    />
  );
};

export default Paginate;
