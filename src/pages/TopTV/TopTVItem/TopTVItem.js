import React, { Component } from "react";

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
      <div key={i} className="main__item">
        <figure className="main__image">
          <div
            style={item.vote_average >= 7.5 ? superFilm : null}
            className="main__average"
          >
            <span>{item.vote_average}</span>
          </div>
          <img
            className="main__img"
            src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
            alt=""
          />

          <h2 className="main__heading-tertiary">{item.original_name}</h2>
          {this.genresHandler(item.genre_ids)}
        </figure>
      </div>
    ));

    return <>{topTV}</>;
  }
}

export default TopTVItem;
