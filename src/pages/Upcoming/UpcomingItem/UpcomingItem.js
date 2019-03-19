import React from "react";

// import "./UpcomingItem.scss";

const UpcomingItem = props => {
  const { items } = props;

  const upcomings = items.map(item => (
    <div key={item.id} className="upcoming__item">
      <div className="upcoming__text-box">
        <h3 className="upcoming__heading-tertiary">{item.title}</h3>
        <span>{item.vote_average}</span>
      </div>
      <img
        className="upcoming__image"
        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
        alt=""
      />
    </div>
  ));
  upcomings.splice(10);

  return <>{upcomings}</>;
};

export default UpcomingItem;
