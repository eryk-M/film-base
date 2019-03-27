import React from "react";

const LoginButton = props => {
  return (
    <div className="searchbar__login">
      <button onClick={props.click}>Login</button>
    </div>
  );
};

export default LoginButton;
