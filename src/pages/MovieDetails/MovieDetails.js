import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Upcoming from "../Upcoming/UpcomingItem/UpcomingItem";
import { bindActionCreators } from "redux";

import "./MovieDetails.scss";

import { connect } from "react-redux";
import { getMovieDetails } from "../../actions/moviesDetails.actions";
import { getApi } from "../../actions/api.actions";
import { getVideos } from "../../actions/videos.actions";

import Loader from "../../components/Loader/Loader";
import WOW from "wowjs";

class MovieDetails extends Component {
  state = {};

  componentDidMount() {
    this.props.getApi();
    this.props.getMovieDetails(this.props.match.params.id, this.props.api);
    this.props.getVideos(this.props.match.params.id, this.props.api);
    if (typeof window !== "undefined") {
      const wow = new WOW.WOW({
        live: false
      });
      wow.init();
    }
  }

  render() {
    const { moviesDetails } = this.props;
    const backdrop = `https://image.tmdb.org/t/p/w1280/${
      moviesDetails.backdrop_path
    }`;
    // console.log(moviesDetails.backdrop_path);

    const image = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${
      moviesDetails.poster_path
    }`;
    const date = new Date().toISOString().substr(0, 10);
    const superFilm = {
      color: "rgba(46, 204, 113, 1)"
    };
    const videos = this.props.videos.results;
    const filteredVideos = videos.filter(video => video.type === "Trailer");
    const just = filteredVideos.splice(0, 3);

    // console.log(this.props.videos.results);

    // console.log(genres);

    // const genres = { ...this.props.moviesDetails.genres };
    // const co = genres.map(genre => ({
    //   genre: genre.name
    // }));
    // console.log(co);

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
          <div className="movie__trailer wow fadeIn" data-wow-delay="0.5s">
            <p className="movie__trailer-heading">Trailers</p>
            {/* <div></div> */}
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
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetails: bindActionCreators(getMovieDetails, dispatch),
    getApi: bindActionCreators(getApi, dispatch),
    getVideos: bindActionCreators(getVideos, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
