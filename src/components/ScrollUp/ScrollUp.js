import React from "react";

import { Link } from "react-scroll";
import icons from "../../assets/icons.svg";
const ScrollUp = () => {
  return (
    <div className="scrollUp">
      <Link
        to="scroll__to"
        spy={true}
        smooth={true}
        offset={-70}
        duration={590}
      >
        <svg className="icon icon-chevron-up">
          <use xlinkHref={`${icons}#icon-chevron-up`} />
        </svg>
      </Link>
    </div>
  );
};

export default ScrollUp;
