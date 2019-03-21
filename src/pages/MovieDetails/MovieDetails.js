import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Upcoming from "../Upcoming/UpcomingItem/UpcomingItem";
import { bindActionCreators } from "redux";

import "./MovieDetails.scss";

import { connect } from "react-redux";
import { getMovieDetails } from "../../actions/moviesDetails.actions";
import { getGenres } from "../../actions/genres.actions";
import Loader from "../../components/Loader/Loader";
import WOW from "wowjs";

class MovieDetails extends Component {
  state = {};

  componentDidMount() {
    this.props.getMovieDetails(this.props.match.params.id);
    if (typeof window !== "undefined") {
      const wow = new WOW.WOW({
        live: false
      });
      wow.init();
    }
    // this.clearState();
  }

  render() {
    const { moviesDetails } = this.props;
    // console.log(this.match.params.id);
    // console.log(this.props.moviesDetails);
    console.log(moviesDetails);
    const backdrop = `https://image.tmdb.org/t/p/w1280/${
      moviesDetails.backdrop_path
    }`;
    const image = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${
      moviesDetails.poster_path
    }`;
    const date = new Date().toISOString().substr(0, 10);
    const superFilm = {
      color: "rgba(46, 204, 113, 1)"
    };
    // const iframe = `<iframe id="ytplayer" type="text/html" width="640" height="360"
    // src="https://www.youtube.com/embed/${dsa}"
    // frameborder="0"/>`

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
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesDetails: state.moviesDetails,
    genres: state.genres,
    loaded: state.loaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetails: bindActionCreators(getMovieDetails, dispatch),
    getGenres: bindActionCreators(getGenres, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
