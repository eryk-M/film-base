import React, { Component } from "react";
import "./Burger.scss";
import { slide as Menu } from "react-burger-menu";
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
        {burgerMenu}
      </Menu>
    );
  }
}

export default Burger;
