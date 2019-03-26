import React from "react";
import { Link } from "react-router-dom";

const TopPeopleItem = props => {
  const people = props.people.map((item, i) => (
    <div key={item.id} className="main__item swiper-slide">
      <figure className="main__image">
        <Link style={{ textDecoration: "none" }} to={`/people/${item.id}`}>
          <div className="main__item-wrapper">
            <img
              className="main__img"
              src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
              alt=""
            />

            <h2 className="main__heading-tertiary-people">{item.name}</h2>
          </div>
        </Link>
      </figure>
    </div>
  ));

  return <>{people}</>;
};

export default TopPeopleItem;
