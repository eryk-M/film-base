import React from "react";

// import "./UpcomingItem.scss";

const UpcomingItem = props => {
  const { items } = props;
  // const visisble = 10;

  const superFilm = {
    backgroundColor: "rgba(35, 160, 82, 0.7)"
  };

  const upcomings = items.map(item => (
    <div key={item.id} className="upcoming__item">
      <figure className="upcoming__image">
        <div
          style={item.vote_average >= 7.5 ? superFilm : null}
          className="upcoming__average"
        >
          <span>{item.vote_average}</span>
        </div>
        <img
          className="upcoming__img"
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${
            item.poster_path
          }`}
          alt=""
        />

        <h2 className="upcoming__heading-tertiary">{item.title}</h2>
      </figure>

      {/* <div className="upcoming__text-box">
        <h2 className="upcoming__heading-tertiary">{item.title}</h2>
      </div> */}
    </div>
  ));

  upcomings.splice(props.visible);

  return <>{upcomings}</>;
};

export default UpcomingItem;
