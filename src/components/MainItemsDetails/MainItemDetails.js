import React, { Component } from "react";
import { Link } from "react-router-dom";
import noImage from "../../assets/images/no_image1.png";

class MainItemDetails extends Component {
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
  handleDetails = () => {
    if (this.props.link === "movies" || this.props.link === "tv") {
      const superFilm = {
        backgroundColor: "rgba(35, 160, 82, 0.7)"
      };
      const items = this.props.movies.map((item, i) => (
        <div key={item.id} className="main__item">
          <figure className="main__image">
            <Link
              style={{ textDecoration: "none" }}
              to={`/details/${this.props.link}/${item.id}`}
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
                  alt={
                    this.props.link === "movies"
                      ? item.title
                      : item.original_name
                  }
                />

                <h2 className="main__heading-tertiary">
                  {this.props.link === "movies"
                    ? item.title
                    : item.original_name}
                </h2>
              </div>
            </Link>
            {this.genresHandler(item.genre_ids)}{" "}
            <span className="main__release-date">
              {this.props.link === "movies"
                ? item.release_date.substr(0, 4)
                : item.first_air_date.substr(0, 4)}
            </span>
          </figure>
        </div>
      ));
      return <> {items} </>;
    } else if (this.props.link === "people") {
      const people = this.props.people.map((item, i) => (
        <div key={item.id} className="main__item swiper-slide">
          <figure className="main__image">
            <Link style={{ textDecoration: "none" }} to={`/people/${item.id}`}>
              <div className="main__item-wrapper">
                <img
                  className="main__img"
                  src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
                  alt={item.name}
                />

                <h2 className="main__heading-tertiary-people">{item.name}</h2>
              </div>
            </Link>
          </figure>
        </div>
      ));

      return <>{people}</>;
    }
  };

  render() {
    return <>{this.handleDetails()}</>;
  }
}

export default MainItemDetails;
