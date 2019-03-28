import React from "react";

const LoginButton = props => {
  return (
    <button className="searchbar__button" onClick={props.click}>
      <i class="fas fa-sign-in-alt" />
    </button>
  );
};

export default LoginButton;
