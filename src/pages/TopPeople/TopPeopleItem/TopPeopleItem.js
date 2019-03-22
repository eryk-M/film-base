import React from "react";

const TopMoviesItem = props => {
  const people = props.people.map((item, i) => (
    <div key={i} className="main__item">
      <figure className="main__image">
        <img
          className="main__img"
          src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
          alt=""
        />

        <h2 className="main__heading-tertiary-people">{item.name}</h2>
      </figure>
    </div>
  ));

  return <>{people}</>;
};

export default TopMoviesItem;
