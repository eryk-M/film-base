import React from "react";

const TopMoviesItem = props => {
  const people = props.people.map(item => (
    <div key={item.id} className="main__item">
      <figure className="main__image wow fadeIn">
        <img
          className="main__img"
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${
            item.profile_path
          }`}
          alt=""
        />

        <h2 className="main__heading-tertiary-people">{item.name}</h2>
      </figure>
    </div>
  ));

  people.splice(props.visible);

  return <>{people}</>;
};

export default TopMoviesItem;
