import React, { Component } from "react";
import { Link } from "react-router-dom";

class DiscoverItem extends Component {
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
    const discovers = this.props.discover.map((item, i) => (
      // <Link to={`/movies/${item.id}`}>
      <div key={i} className="main__item">
        <figure className="main__image">
          <Link style={{ textDecoration: "none" }} to={`/movies/${item.id}`}>
            <div className="main__item-wrapper">
              <div
                style={item.vote_average >= 7.5 ? superFilm : null}
                className="main__average"
              >
                <span>{item.vote_average}</span>
              </div>
              {item.poster_path ? (
                <img
                  className="main__img"
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
                      : null
                  }
                  alt=""
                />
              ) : null}

              <h2 className="main__heading-tertiary">{item.title}</h2>
            </div>
          </Link>
          {this.genresHandler(item.genre_ids)}{" "}
          <span className="main__release-date">
            {item.release_date.substr(0, 4)}
          </span>
        </figure>
      </div>
    ));

    return <>{discovers}</>;
    // return null;
  }
}

export default DiscoverItem;
