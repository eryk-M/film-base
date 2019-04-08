import React from "react";
import mainLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="searchbar__logo">
        <img className="logo" src={mainLogo} alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
