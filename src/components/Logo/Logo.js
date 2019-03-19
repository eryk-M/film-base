import React from "react";
import mainLogo from "../../assets/images/logo.png";

import "./Logo.scss";

const Logo = () => {
  // const img =

  return (
    <div className="searchbar__logo">
      <img className="logo" src={mainLogo} alt="Logo" />
    </div>
  );
};

export default Logo;
