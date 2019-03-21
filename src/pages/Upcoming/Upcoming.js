import React, { Component } from "react";
import UpcomingItem from "./UpcomingItem/UpcomingItem";
import "../MainStyling.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getUpcoming } from "../../actions/upcoming.actions";
import { getGenres } from "../../actions/genres.actions";
import { getApi } from "../../actions/api.actions";
import Loader from "../../components/Loader/Loader";
import LoadMore from "../../components/LoadMore/LoadMore";

class Upcoming extends Component {
  state = {
    visible: 10
  };

  componentDidMount() {
    this.props.getApi();
    this.props.getUpcoming(this.props.api);
    this.props.getGenres(this.props.api);

    // console.log(this.props.movies.loaded);
    // console.log(this.props.api.api);
  }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 10 };
    });
  };

  render() {
    // console.log(this.props.api);
    const movies = this.props.movies.results;
    // console.log(movies);
    // console.log(this);
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
            <LoadMore
              className="wow fadeIn"
              data-wow-delay="2s"
              click={this.loadMore}
            />
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
    genres: state.genres,
    api: state.api.api
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUpcoming: bindActionCreators(getUpcoming, dispatch),
    getGenres: bindActionCreators(getGenres, dispatch),
    getApi: bindActionCreators(getApi, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upcoming);
