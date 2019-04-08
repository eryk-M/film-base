import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import icons from "../../assets/icons.svg";
const list = [
  { name: "Upcoming movies", path: "/", icon: "icon-film" },
  { name: "Top rated movies", path: "/movies/top", icon: "icon-star-empty" },
  { name: "Discover movies", path: "/discover", icon: "icon-compass2" },
  { name: "Top rated people", path: "/people/top", icon: "icon-group" },
  { name: "Top rated TV shows", path: "/tv/top", icon: "icon-television" }
];

const Navigation = () => {
  const menu = list.map((item, i) => (
    <li className="navigation__item" key={i}>
      <NavLink className="navigation__link" to={item.path} exact>
        <svg className={`icon ${item.icon}`}>
          <use xlinkHref={`${icons}#${item.icon}`} />
        </svg>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">{menu}</ul>

        <div className="navigation__made">
          <a
            href="https://github.com/eryk-M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="icon icon-github">
              <use xlinkHref={`${icons}#icon-github`} />
            </svg>
          </a>
          <span>Made by eryk-M</span>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
