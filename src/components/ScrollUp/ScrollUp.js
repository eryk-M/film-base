import React from "react";

import { Link } from "react-scroll";

const ScrollUp = () => {
  return (
    <div className="scrollUp">
      <Link
        // activeClass="active"
        to="scroll__to"
        spy={true}
        smooth={true}
        offset={-70}
        duration={590}
      >
        <i className="fas fa-chevron-up" />
      </Link>
    </div>
  );
};

export default ScrollUp;
