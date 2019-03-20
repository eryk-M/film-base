import React, { Component } from "react";
import UpcomingItem from "./UpcomingItem/UpcomingItem";
import "../MainStyling.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getUpcoming } from "../../actions/upcoming.actions";
import { getGenres } from "../../actions/genres.actions";
import Loader from "../../components/Loader/Loader";
import LoadMore from "../../components/LoadMore/LoadMore";

class Upcoming extends Component {
  state = {
    visible: 10
  };

  componentDidMount() {
    this.props.getUpcoming();
    this.props.getGenres();
    // console.log(this.props.movies.loaded);
  }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 10 };
    });
  };

  render() {
    const movies = this.props.movies.results;
    return (
      <div className="main">
        <h1 className="main__heading">Upcoming movies</h1>
        <div className="main__container">
          {this.props.movies.loaded ? null : <Loader />}

          <UpcomingItem
            genres={this.props.genres.genres}
            movies={movies}
            visible={this.state.visible}
          />

          {this.state.visible < movies.length && (
            <LoadMore click={this.loadMore} />
            // <button
            //   style={{
            //     padding: "1rem 1rem",
            //     color: "black",
            //     margin: "0 auto"
            //   }}
            //   onClick={this.loadMore}
            // >
            //   Load more
            // </button>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    loaded: state.loaded,
    genres: state.genres
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUpcoming: bindActionCreators(getUpcoming, dispatch),
    getGenres: bindActionCreators(getGenres, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upcoming);
