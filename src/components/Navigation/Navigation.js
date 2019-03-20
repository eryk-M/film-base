import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const list = [
  { name: "Upcoming movies", path: "/", icon: "fas fa-film" },
  { name: "Top rated movies", path: "/movies/top", icon: "far fa-star" },
  { name: "Top rated people", path: "/people/top", icon: "fas fa-users" },
  { name: "Top rated TV shows", path: "/tv/top", icon: "fas fa-tv" }
];

const Navigation = props => {
  const menu = list.map(item => (
    <li className="navigation__item" key={item.id}>
      <NavLink className="navigation__link" to={item.path} exact>
        <i className={item.icon} />
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          {/* <li className="navigation__item">
          <a href="/" className="navigation__link">
            Upcoming movies
          </a>
        </li>
        <li className="navigation__item">
          <a href="/movies/top" className="navigation__link">
            Top rated movies
          </a>
        </li>
        <li className="navigation__item">
          <a href="/people/top" className="navigation__link">
            Top rated people
          </a>
        </li>
        <li className="navigation__item">
          <a href="/tv/top" className="navigation__link">
            Top rated TV shows
          </a>
        </li> */}
          {menu}
        </ul>
        <div className="navigation__greeting">
          <h3>dksaldsakdsa</h3>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
