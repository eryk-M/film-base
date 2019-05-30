import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./MovieDetails.scss";

import { getMovieDetails } from "../../actions/MovieActions/moviesDetails.actions";
import { getVideos } from "../../actions/MovieActions/videos.actions";
import { getMovieCredits } from "../../actions/MovieActions/movieCredits.actions";
import { getMovieReviews } from "../../actions/MovieActions/movieReviews.actions";
import { getMovieExternal } from "../../actions/MovieActions/movieExternal.actions";

import { getTVDetails } from "../../actions/TVactions/TVDetails.actions";
import { getTVVideos } from "../../actions/TVactions/TVVideos.actions";
import { getTVCredits } from "../../actions/TVactions/TVCredits.actions";
import { getTVReviews } from "../../actions/TVactions/TVReviews.actions";
import { getTVExternal } from "../../actions/TVactions/TVExternal.actions";

import { getMovieAccountState } from "../../actions/userFavorites/movieAccountState.actions";
import { getTVAccountState } from "../../actions/userFavorites/TVAccountState.actions";

import MovieDetailsPeople from "./MovieDetailsPeople/MovieDetailsPeople";
import Loader from "../../components/Loader/Loader";
import Swiper from "react-id-swiper";
import icons from "../../assets/icons.svg";
import imdb from "../../assets/images/imdb.png";
import fb from "../../assets/images/fb.png";
import { Navigation } from "swiper/dist/js/swiper.esm";

class MovieDetails extends Component {
  state = {
    cast: [],
    message: "",
    loadingFavorite: false
  };

  componentDidMount() {
    this.handleFetchData(this.props.match.params.id);
    const session = localStorage.getItem("session");
    if (this.props.status === "user") {
      if (this.props.match.params.type === "movies") {
        this.props.getMovieAccountState(
          this.props.api,
          this.props.match.params.id,
          session
        );
      } else if (this.props.match.params.type === "tv") {
        this.props.getTVAccountState(
          this.props.api,
          this.props.match.params.id,
          session
        );
      }
    }
  }
  componentDidUpdate() {
    if (this.props.moviesDetails.error || this.props.TVDetails.error) {
      this.props.history.push({
        pathname: "/error"
      });
    }
  }

  handleFetchData = (id, type = this.props.match.params.type) => {
    if (type === "movies") {
      this.props.getMovieDetails(id, this.props.api);
      this.props.getVideos(id, this.props.api);
      this.props.getMovieCredits(id, this.props.api);
      this.props.getMovieReviews(id, this.props.api);
      this.props.getMovieExternal(id, this.props.api);
    } else if (type === "tv") {
      this.props.getTVDetails(id, this.props.api);
      this.props.getTVVideos(id, this.props.api);
      this.props.getTVCredits(id, this.props.api);
      this.props.getTVReviews(id, this.props.api);
      this.props.getTVExternal(id, this.props.api);
    }
  };
  handleBack = () => {
    this.props.history.goBack();
  };

  handleFavorite = (e, api, type, id) => {
    const session = localStorage.getItem("session");
    const userID = localStorage.getItem("user_id");
    if (this.props.status === "user") {
      this.setState({
        loadingFavorite: true
      });

      fetch(
        `https://api.themoviedb.org/3/account/${userID}/favorite?api_key=${api}&session_id=${session}`,
        {
          method: "POST",
          body: JSON.stringify({
            media_type: type,
            media_id: id,
            favorite: !e.target
              .closest(".icon-heart")
              .classList.value.includes("--active")
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then(() => {
          if (this.props.match.params.type === "movies") {
            this.props.getMovieAccountState(
              this.props.api,
              this.props.match.params.id,
              session
            );
          } else if (this.props.match.params.type === "tv") {
            this.props.getTVAccountState(
              this.props.api,
              this.props.match.params.id,
              session
            );
          }
        })
        .then(
          e.target.closest(".icon-heart").classList.toggle("icon-heart--active")
        )
        .then(() => {
          if (this.props.movieState.favorite || this.props.TVState.favorite) {
            this.setState({
              message: "Removed from favorites!",
              loadingFavorite: false
            });
          } else {
            this.setState({
              message: "Added to favorites!",
              loadingFavorite: false
            });
          }
        })

        .catch(error => alert(error));
    } else {
      document.querySelector(".movie__favorite-warning").style.display =
        "block";
    }
  };
  handleGetDetails = type => {
    //WIDTH - CHANGING PEOPLE VISIBLE IN SWIPER
    const windowWidth = window.innerWidth;

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
    if (windowWidth < 780 && windowWidth >= 415) {
      params.slidesPerView = 4;
      params.slidesPerGroup = 4;
    } else if (windowWidth < 415) {
      params.slidesPerView = 2;
      params.slidesPerGroup = 2;
    }
    const { moviesDetails, TVDetails } = this.props;

    //MAIN IMAGE
    const backdrop = `https://image.tmdb.org/t/p/w1280/${
      this.props.match.params.type === "movies"
        ? moviesDetails.backdrop_path
        : TVDetails.backdrop_path
    }`;
    //SECONDARY IMAGE
    const image = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${
      this.props.match.params.type === "movies"
        ? moviesDetails.poster_path
        : TVDetails.poster_path
    }`;
    //DATE
    const date = new Date().toISOString().substr(0, 10);
    //SUPERFILM COLOR
    const superFilm = {
      fill: "rgba(46, 204, 113, 1)"
    };
    let just,
      actors,
      videos = null;
    if (type === "movies") {
      //VIDEO MOVIES
      videos = this.props.videos.results;
      //ACTORS MOVIES
      actors = this.props.movieCredits.cast;
    } else if (type === "tv") {
      //VIDEO TV
      videos = this.props.TVVideos.results;
      //ACTORS TV
      actors = this.props.TVCredits.cast;
    }
    //check if video === trailer for movies/tv
    const filteredVideos = videos.filter(video => video.type === "Trailer");
    if (windowWidth > 415) {
      just = filteredVideos.splice(0, 3);
    } else if (windowWidth <= 415) {
      just = filteredVideos.splice(0, 1);
    }

    switch (type) {
      case "movies":
        return (
          <>
            {this.props.moviesDetails.isLoading ? (
              <Loader />
            ) : (
              <div className="movie">
                <div
                  className="movie__backdrop"
                  style={{
                    backgroundImage: `url(${backdrop})`
                  }}
                >
                  <svg
                    onClick={this.handleBack}
                    className="icon icon-arrow-left"
                  >
                    <use xlinkHref={`${icons}#icon-arrow-left`} />
                  </svg>
                  {this.state.message ? (
                    <p className="message__favorite">{this.state.message}</p>
                  ) : null}
                  {this.state.loadingFavorite ? (
                    <Loader />
                  ) : (
                    <svg
                      onClick={e =>
                        this.handleFavorite(
                          e,
                          this.props.api,
                          "movie",
                          this.props.moviesDetails.id
                        )
                      }
                      className={
                        this.props.movieState.favorite
                          ? "icon icon-heart icon-heart--active"
                          : "icon icon-heart"
                      }
                    >
                      <use xlinkHref={`${icons}#icon-heart`} />
                    </svg>
                  )}

                  <div
                    className="movie__favorite-warning"
                    style={{ display: "none" }}
                  >
                    <p>You need TMDB account to use this feature</p>
                  </div>
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
                    <h3 className="movie__heading">
                      {moviesDetails.original_title}
                    </h3>
                    <div className="movie__rating-wrapper">
                      <div className="movie__rating-wrapper-1">
                        <p className="movie__rating">Rating</p>
                        <span>
                          <svg
                            style={
                              moviesDetails.vote_average >= 7.5
                                ? superFilm
                                : null
                            }
                            className="icon icon-star-full"
                          >
                            <use xlinkHref={`${icons}#icon-star-full`} />
                          </svg>
                          {moviesDetails.vote_average}{" "}
                        </span>
                      </div>
                      <div className="movie__rating-wrapper-2">
                        {moviesDetails.imdb_id ? (
                          <a
                            href={`https://www.imdb.com/title/${
                              moviesDetails.imdb_id
                            }/`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="movie__rating-imdb"
                              src={imdb}
                              alt="imdb logo"
                            />
                          </a>
                        ) : null}
                        {this.props.movieExternal.facebook_id ? (
                          <a
                            href={`https://facebook.com/${
                              this.props.movieExternal.facebook_id
                            }/`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="movie__rating-fb"
                              src={fb}
                              alt="facebook logo"
                            />
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <p className="movie__release">
                      Release date
                      <span>
                        {moviesDetails.release_date}
                        {moviesDetails.release_date <= date
                          ? " | released"
                          : null}
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
                  {actors.length > 0 ? (
                    <Swiper {...params}>
                      <MovieDetailsPeople people={actors} />
                    </Swiper>
                  ) : (
                    <p className="movie__trailer-paragraph">
                      No info about cast...
                    </p>
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
                <div className="movie__reviews">
                  <p className="movie__reviews-heading">Reviews</p>
                  <div className="movie__reviews-wrapper">
                    {this.props.movieReviews.results.length !== 0 ? (
                      this.props.movieReviews.results.map(review => (
                        <div key={review.id} className="movie__reviews-item">
                          <strong>
                            <p className="movie__reviews-author">
                              {review.author}
                            </p>
                          </strong>
                          <p className="movie__reviews-content">
                            "{review.content.substr(0, 255)}..."
                          </p>
                          <a
                            href={review.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="movie__reviews-check">
                              Check full review <span>&rarr;</span>
                            </p>
                          </a>
                        </div>
                      ))
                    ) : (
                      <p className="movie__trailer-paragraph">
                        No reviews here...
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        );

      case "tv":
        return (
          <>
            {this.props.TVDetails.isLoading ? (
              <Loader />
            ) : (
              <div className="movie">
                <div
                  className="movie__backdrop"
                  style={{
                    backgroundImage: `url(${backdrop})`
                  }}
                >
                  <svg
                    onClick={this.handleBack}
                    className="icon icon-arrow-left"
                  >
                    <use xlinkHref={`${icons}#icon-arrow-left`} />
                  </svg>
                  {this.state.message ? (
                    <p className="message__favorite">{this.state.message}</p>
                  ) : null}
                  {this.state.loadingFavorite ? (
                    <Loader />
                  ) : (
                    <svg
                      onClick={e =>
                        this.handleFavorite(
                          e,
                          this.props.api,
                          "tv",
                          this.props.TVDetails.id
                        )
                      }
                      className={
                        this.props.TVState.favorite
                          ? "icon icon-heart icon-heart--active"
                          : "icon icon-heart"
                      }
                    >
                      <use xlinkHref={`${icons}#icon-heart`} />
                    </svg>
                  )}
                  <div
                    className="movie__favorite-warning"
                    style={{ display: "none" }}
                  >
                    <p>You need TMDB account to use this feature</p>
                  </div>
                  <img className="movie__image" src={image} alt="" />
                  <p className="movie__genres">
                    {this.props.TVDetails.genres
                      ? `${
                          this.props.TVDetails.genres[0]
                            ? this.props.TVDetails.genres[0].name
                            : ""
                        }` +
                        `${
                          this.props.TVDetails.genres[1]
                            ? " | " + this.props.TVDetails.genres[1].name
                            : ""
                        }` +
                        `${
                          this.props.TVDetails.genres[2]
                            ? " | " + this.props.TVDetails.genres[2].name
                            : ""
                        }`
                      : ""}
                  </p>
                  <div className="movie__info">
                    <h3 className="movie__heading">
                      {TVDetails.original_name}
                    </h3>

                    <div className="movie__rating-wrapper">
                      <div className="movie__rating-wrapper-1">
                        <p className="movie__rating">Rating</p>
                        <span>
                          <svg
                            style={
                              TVDetails.vote_average >= 7.5 ? superFilm : null
                            }
                            className="icon icon-star-full"
                          >
                            <use xlinkHref={`${icons}#icon-star-full`} />
                          </svg>
                          {TVDetails.vote_average}{" "}
                        </span>
                      </div>
                      <div className="movie__rating-wrapper-2">
                        {this.props.TVExternal.imdb_id ? (
                          <a
                            href={`https://www.imdb.com/title/${
                              this.props.TVExternal.imdb_id
                            }/`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="movie__rating-imdb"
                              src={imdb}
                              alt="imdb logo"
                            />
                          </a>
                        ) : null}
                        {this.props.TVExternal.facebook_id ? (
                          <a
                            href={`https://facebook.com/${
                              this.props.TVExternal.facebook_id
                            }/`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="movie__rating-fb"
                              src={fb}
                              alt="facebook logo"
                            />
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <p className="movie__release">
                      Release date
                      <span>
                        {TVDetails.first_air_date}
                        {TVDetails.first_air_date <= date
                          ? " | released"
                          : null}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="movie__overview">
                  <p className="movie__overview-heading">Overview</p>
                  <p className="movie__overview-paragraph">
                    {TVDetails.overview}
                  </p>
                </div>
                <div className="movie__cast">
                  <p className="movie__cast-heading">Cast</p>
                  {actors.length > 0 ? (
                    <Swiper {...params}>
                      <MovieDetailsPeople people={actors} />
                    </Swiper>
                  ) : (
                    <p className="movie__trailer-paragraph">
                      No info about cast...
                    </p>
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
                <div className="movie__reviews">
                  <p className="movie__reviews-heading">Reviews</p>
                  <div className="movie__reviews-wrapper">
                    {this.props.TVReviews.results.length !== 0 ? (
                      this.props.TVReviews.results.map(review => (
                        <div key={review.id} className="movie__reviews-item">
                          <strong>
                            <p className="movie__reviews-author">
                              {review.author}
                            </p>
                          </strong>
                          <p className="movie__reviews-content">
                            "{review.content.substr(0, 255)}..."
                          </p>
                          <a
                            href={review.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="movie__reviews-check">
                              Check full review <span>&rarr;</span>
                            </p>
                          </a>
                        </div>
                      ))
                    ) : (
                      <p className="movie__trailer-paragraph">
                        No reviews here...
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        );

      default:
        return null;
    }
  };

  render() {
    return <>{this.handleGetDetails(this.props.match.params.type)}</>;
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    api: state.api.api,

    moviesDetails: state.moviesDetails,
    videos: state.videos,
    movieCredits: state.movieCredits,
    movieReviews: state.movieReviews,
    movieExternal: state.movieExternal,

    TVDetails: state.TVDetails,
    TVVideos: state.TVVideos,
    TVCredits: state.TVCredits,
    TVReviews: state.TVReviews,
    TVExternal: state.TVExternal,

    accountDetails: state.accountDetails,
    sessionID: state.sessionID,
    status: state.status.status,

    movieState: state.movieState,
    TVState: state.TVState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetails: bindActionCreators(getMovieDetails, dispatch),
    getVideos: bindActionCreators(getVideos, dispatch),
    getMovieCredits: bindActionCreators(getMovieCredits, dispatch),
    getMovieReviews: bindActionCreators(getMovieReviews, dispatch),
    getMovieExternal: bindActionCreators(getMovieExternal, dispatch),

    getTVDetails: bindActionCreators(getTVDetails, dispatch),
    getTVVideos: bindActionCreators(getTVVideos, dispatch),
    getTVCredits: bindActionCreators(getTVCredits, dispatch),
    getTVReviews: bindActionCreators(getTVReviews, dispatch),
    getTVExternal: bindActionCreators(getTVExternal, dispatch),

    getMovieAccountState: bindActionCreators(getMovieAccountState, dispatch),
    getTVAccountState: bindActionCreators(getTVAccountState, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieDetails)
);
