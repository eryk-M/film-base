import React from "react";

const LoadMore = props => {
  //   console.log(props.click);
  return (
    <button
      style={{
        padding: "1rem 1rem",
        color: "black",
        margin: "0 auto"
      }}
      onClick={props.click}
    >
      Load more
    </button>
  );
};

export default LoadMore;
