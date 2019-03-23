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
      <div className="imHere">
        <p className="scroll__to" />
        <div className="searchbar">
          <Logo />
          <Search />
          <ScrollUp />
        </div>
      </div>
    );
  }
}

export default NavBar;
