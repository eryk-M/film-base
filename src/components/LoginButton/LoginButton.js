import React from "react";
import icons from "../../assets/icons.svg";
const LoginButton = props => {
  return (
    <button className="searchbar__button" onClick={props.click}>
      <svg className="icon icon-enter">
        <use xlinkHref={`${icons}#icon-enter`} />
      </svg>
    </button>
  );
};

export default LoginButton;
