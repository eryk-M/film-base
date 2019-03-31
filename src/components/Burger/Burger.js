import React, { Component } from "react";

import "./Burger.scss";
import { stack as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

const burgerList = [
  { name: "Upcoming movies", path: "/" },
  { name: "Top rated movies", path: "/movies/top" },
  { name: "Discover movies", path: "/discover" },
  { name: "Top rated people", path: "/people/top" },
  { name: "Top rated TV shows", path: "/tv/top" }
];
class Burger extends Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const burgerMenu = burgerList.map((burgerItem, i) => (
      <NavLink key={i} onClick={this.handleClick} exact to={burgerItem.path}>
        {" "}
        {burgerItem.name}
      </NavLink>
    ));
    return (
      <Menu
        right
        isOpen={this.state.isOpen}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        {/* <NavLink onClick={this.handleClick} to="/" exact className="menu-item">
          Upcoming movies
        </NavLink>
        <NavLink
          onClick={this.handleClick}
          to="/movies/top"
          className="menu-item"
        >
          Top rated movies
        </NavLink>
        <NavLink
          onClick={this.handleClick}
          to="/discover"
          className="menu-item"
        >
          Discover movies
        </NavLink>

        <NavLink
          onClick={this.handleClick}
          to="/people/top"
          className="menu-item"
        >
          Top rated people
        </NavLink>
        <NavLink onClick={this.handleClick} to="/tv/top" className="menu-item">
          Top rated TV shows
        </NavLink> */}
        {burgerMenu}
      </Menu>
    );
  }
}

export default Burger;
