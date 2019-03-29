import React, { Component } from "react";
import { Link } from "react-router-dom";
import noImage from "../../../assets/images/no_image1.png";

class TopTVItem extends Component {
  genresHandler = genres => {
    //sprawdzam id gatunku, porownuje je do listy id gatunkow i zwracam nazwe gatunku
    if (this.props.genres) {
      let checkGenres = this.props.genres.filter(genre =>
        genre.id === genres[0] ||
        genre.id === genres[1] ||
        genre.id === genres[2]
          ? genre.name
          : null
      );
      return (
        <p className="main__genres">
          {checkGenres[0] ? checkGenres[0].name : ""}
          {checkGenres[1] ? ` / ` + checkGenres[1].name : ""}
          {checkGenres[2] ? ` / ` + checkGenres[2].name : ""}
        </p>
      );
    }
  };

  render() {
    const superFilm = {
      backgroundColor: "rgba(35, 160, 82, 0.7)"
    };

    const topTV = this.props.topTV.map((item, i) => (
      <div key={item.id} className="main__item">
        <figure className="main__image">
          <Link
            style={{ textDecoration: "none" }}
            to={`/details/tv/${item.id}`}
          >
            <div className="main__item-wrapper">
              <div
                style={item.vote_average >= 7.5 ? superFilm : null}
                className="main__average"
              >
                <span>{item.vote_average}</span>
              </div>
              <img
                className="main__img"
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
                    : noImage
                }
                alt=""
              />

              <h2 className="main__heading-tertiary">{item.original_name}</h2>
            </div>
          </Link>
          {this.genresHandler(item.genre_ids)}
          <span className="main__release-date">
            {item.first_air_date.substr(0, 4)}
          </span>
        </figure>
      </div>
    ));

    return <>{topTV}</>;
  }
}

export default TopTVItem;
