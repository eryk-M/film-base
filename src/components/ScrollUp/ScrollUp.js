import React, { Component } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

const ScrollUp = () => {
  return (
    <div className="scrollUp">
      <Link
        // activeClass="active"
        to="searchbar"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <i className="fas fa-chevron-up" />
      </Link>
    </div>
  );
};

export default ScrollUp;
