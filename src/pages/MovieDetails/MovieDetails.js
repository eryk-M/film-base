import React, { Component } from "react";

import { bindActionCreators } from "redux";

import "./MovieDetails.scss";

import { connect } from "react-redux";
import { getMovieDetails } from "../../actions/moviesDetails.actions";
import { getVideos } from "../../actions/videos.actions";
import { getMovieCredits } from "../../actions/movieCredits.actions";
import { withRouter } from "react-router-dom";

import { getAccountState } from "../../actions/userFavorites/movieAccountState.actions";
import MovieDetailsPeople from "./MovieDetailsPeople/MovieDetailsPeople";

import Loader from "../../components/Loader/Loader";
import WOW from "wowjs";

import Swiper from "react-id-swiper";
import { Navigation } from "swiper/dist/js/swiper.esm";

class MovieDetails extends Component {
  state = {
    cast: []
  };

  componentDidMount() {
    this.props.getMovieDetails(this.props.match.params.id, this.props.api);
    this.props.getVideos(this.props.match.params.id, this.props.api);
    this.props.getMovieCredits(this.props.match.params.id, this.props.api);

    if (typeof window !== "undefined") {
      const wow = new WOW.WOW({
        live: false
      });
      wow.init();
    }
    if (this.props.status === "user") {
      this.props.getAccountState(
        this.props.api,
        this.props.match.params.id,
        this.props.sessionID.session_id
      );
    }
  }

  handleFavorite = (e, api, accountID, sessionID, type, id) => {
    if (this.props.status === "user") {
      this.props.getAccountState(api, id, sessionID);
      fetch(
        `https://api.themoviedb.org/3/account/${accountID}/favorite?api_key=${api}&session_id=${sessionID}`,
        {
          method: "POST",
          body: JSON.stringify({
            media_type: type,
            media_id: id,
            favorite: !e.target
              .closest(".fa-heart")
              .classList.value.includes("--active")
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .catch(error => console.log(error));
      e.target.closest(".fa-heart").classList.toggle("fa-heart--active");
    }
  };

  render() {
    if (this.props.moviesDetails.status_code === 34) {
      this.props.history.push({
        pathname: "/error"
      });
    }
    const params = {
      modules: [Navigation],

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      spaceBetween: 30,
      slidesPerView: 5,
      slidesPerGroup: 5,
      rebuildOnUpdate: true,
      shouldSwiperUpdate: true
    };

    const { moviesDetails } = this.props;
    //MAIN IMAGE
    const backdrop = `https://image.tmdb.org/t/p/w1280/${
      moviesDetails.backdrop_path
    }`;
    //SECONDARY IMAGE
    const image = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${
      moviesDetails.poster_path
    }`;
    //DATE
    const date = new Date().toISOString().substr(0, 10);
    //SUPERFILM COLOR
    const superFilm = {
      color: "rgba(46, 204, 113, 1)"
    };
    //VIDEO
    const videos = this.props.videos.results;
    const filteredVideos = videos.filter(video => video.type === "Trailer");
    const just = filteredVideos.splice(0, 3);
    //ACTORS
    const actors = this.props.movieCredits.cast;
    //favorite

    return (
      <>
        <div className="movie wow fadeIn" data-wow-duration="2s">
          {this.props.moviesDetails.loaded ? null : <Loader />}
          <div
            className="movie__backdrop"
            style={{
              backgroundImage: `url(${backdrop})`
            }}
          >
            {" "}
            <i
              onClick={e =>
                this.handleFavorite(
                  e,
                  this.props.api,
                  this.props.accountDetails.id,
                  this.props.sessionID.session_id,
                  "movie",
                  this.props.moviesDetails.id
                )
              }
              className={
                this.props.movieState.favorite
                  ? "fas fa-heart fa-heart--active"
                  : "fas fa-heart"
              }
            />
            <img className="movie__image" src={image} alt="" />
            <p className="movie__genres">
              {this.props.moviesDetails.genres
                ? `${
                    this.props.moviesDetails.genres[0]
                      ? this.props.moviesDetails.genres[0].name
                      : ""
                  }` +
                  `${
                    this.props.moviesDetails.genres[1]
                      ? " | " + this.props.moviesDetails.genres[1].name
                      : ""
                  }` +
                  `${
                    this.props.moviesDetails.genres[2]
                      ? " | " + this.props.moviesDetails.genres[2].name
                      : ""
                  }`
                : ""}
            </p>
            <div className="movie__info">
              <h3 className="movie__heading">{moviesDetails.original_title}</h3>
              <p className="movie__rating">
                Rating
                <span>
                  <i
                    style={moviesDetails.vote_average >= 7.5 ? superFilm : null}
                    className="fas fa-star"
                  />
                  {moviesDetails.vote_average}{" "}
                </span>
              </p>
              <p className="movie__release">
                Release date
                <span>
                  {moviesDetails.release_date}
                  {moviesDetails.release_date <= date ? " | released" : null}
                </span>
              </p>
            </div>
          </div>
          <div className="movie__overview">
            <p className="movie__overview-heading">Overview</p>
            <p className="movie__overview-paragraph">
              {moviesDetails.overview}
            </p>
          </div>
          <div className="movie__cast">
            <p className="movie__cast-heading">Cast</p>
            {actors.length > 0 && (
              <Swiper {...params}>
                <MovieDetailsPeople people={actors} />
              </Swiper>
            )}
          </div>
          <div className="movie__trailer">
            <p className="movie__trailer-heading">Trailers</p>
            {just.map((tr, i) => (
              <iframe
                allowFullScreen="allowfullscreen"
                key={i}
                title="1"
                width="420"
                height="315"
                src={`https://www.youtube.com/embed/${tr.key}`}
              />
            ))}
            <p className="movie__trailer-paragraph">
              {just.length === 0 ? "No info about trailers..." : null}
            </p>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesDetails: state.moviesDetails,
    genres: state.genres,
    loaded: state.loaded,
    api: state.api.api,
    videos: state.videos,
    movieCredits: state.movieCredits,

    accountDetails: state.accountDetails,
    sessionID: state.sessionID,
    status: state.status.status,

    movieState: state.movieState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetails: bindActionCreators(getMovieDetails, dispatch),
    getVideos: bindActionCreators(getVideos, dispatch),
    getMovieCredits: bindActionCreators(getMovieCredits, dispatch),

    getAccountState: bindActionCreators(getAccountState, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieDetails)
);
