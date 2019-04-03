import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
const list = [
  { name: "Upcoming movies", path: "/", icon: "fas fa-film" },
  { name: "Top rated movies", path: "/movies/top", icon: "far fa-star" },
  { name: "Discover movies", path: "/discover", icon: "far fa-compass" },
  { name: "Top rated people", path: "/people/top", icon: "fas fa-users" },
  { name: "Top rated TV shows", path: "/tv/top", icon: "fas fa-tv" }
];

const Navigation = () => {
  const menu = list.map((item, i) => (
    <li className="navigation__item" key={i}>
      <NavLink className="navigation__link" to={item.path} exact>
        <i className={item.icon} />
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">{menu}</ul>
      </nav>
    </>
  );
};

export default Navigation;
