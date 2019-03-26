import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
// import { Link } from "react-router-dom";
const list = [
  { name: "Upcoming movies", path: "/", icon: "fas fa-film" },
  { name: "Top rated movies", path: "/movies/top", icon: "far fa-star" },
  { name: "DISCOVER", path: "/discover", icon: "far fa-compass" },
  { name: "Top rated people", path: "/people/top", icon: "fas fa-users" },
  { name: "Top rated TV shows", path: "/tv/top", icon: "fas fa-tv" }
];

const Navigation = props => {
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
        <div className="navigation__greeting">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.themoviedb.org/"
          >
            <img
              className="navigation__greeting-image"
              src="https://cdn-images-1.medium.com/max/1200/1*vIR7iO-1GnY2xYxL6NiYkw.png"
              alt="TMDB logo"
            />
          </a>
          <p>Made by eryk-M</p>
          <p>Thanks to TMDB</p>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
