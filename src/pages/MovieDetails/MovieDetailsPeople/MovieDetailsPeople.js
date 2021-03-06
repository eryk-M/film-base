import React from "react";
import { Link } from "react-router-dom";
import "./MovieDetailsPeople.scss";
const MovieDetailsPeople = props => {
  const people = props.people.map((item, i) => (
    <div key={i} className="movie__people swiper-slide">
      <figure className="movie__people-image">
        <Link style={{ textDecoration: "none" }} to={`/people/${item.id}`}>
          <div className="movie__people-wrapper">
            {item.profile_path ? (
              <img
                className="movie__people-img"
                src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
                alt={item.name}
              />
            ) : (
              <p style={{ textAlign: "center", color: "var(--color-white-2)" }}>
                No image found
              </p>
            )}

            <h2 className="movie__people-heading">{item.name}</h2>
            <p className="movie__character">
              {item.character ? "as " + item.character : null}
            </p>
          </div>
        </Link>
      </figure>
    </div>
  ));

  return <>{people}</>;
};

export default MovieDetailsPeople;
