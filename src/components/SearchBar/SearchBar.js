import React, { Component } from "react";

import ScrollUp from "../ScrollUp/ScrollUp";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import "./SearchBar.scss";

class NavBar extends Component {
  state = {
    searchValue: ""
  };

  render() {
    return (
      <div className="searchbar">
        <Logo />
        <Search />
        <ScrollUp />
      </div>
    );
  }
}

export default NavBar;
