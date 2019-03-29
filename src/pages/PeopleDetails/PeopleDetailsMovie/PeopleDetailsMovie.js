import React from "react";
import { Link } from "react-router-dom";
import "./PeopleDetailsMovie.scss";
const PeopleDetailsMovie = props => {
  console.log(props.cast);
  // console.log(props.cast);
  const cast = props.cast.map((item, i) => (
    // <div key={i}>{item.title}</div>
    <div key={i} className="people__item swiper-slide">
      <figure className="people__item-image">
        <Link
          style={{ textDecoration: "none" }}
          to={`/details/movies/${item.id}`}
        >
          <div className="people__item-wrapper">
            {item.poster_path ? (
              <img
                className="people__item-img"
                src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                alt=""
              />
            ) : (
              "NO IMAGE FOUND"
            )}

            <h2 className="people__item-heading">
              {item.title}
              <br /> {parseInt(item.release_date)}
            </h2>
          </div>
        </Link>
      </figure>
    </div>
  ));

  return <>{cast}</>;
};

export default PeopleDetailsMovie;
