import React, { Component } from "react";

import Search from "../Search/Search";
import Logo from "../Logo/Logo";

import "./NavBar.scss";

class NavBar extends Component {
  state = {
    searchValue: ""
  };
  render() {
    return (
      <div className="navBar">
        <Logo />
        <Search />
      </div>
    );
  }
}

export default NavBar;
