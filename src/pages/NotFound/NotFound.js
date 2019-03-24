import React from "react";
import r2d2 from "../../assets/images/404.png";

import "./NotFound.scss";

// import '../../assets/images/'

const NotFound = () => {
  return (
    <div className="notFound">
      <h2 className="notFound__heading">There is no page like this :(</h2>
      <span>4</span>
      <img src={r2d2} alt="r2d2 error page" />
      <span>4</span>
    </div>
  );
};

export default NotFound;
