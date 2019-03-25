import React, { Component } from "react";
import UpcomingItem from "./UpcomingItem/UpcomingItem";
import "../MainStyling.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getUpcoming } from "../../actions/upcoming.actions";
import { getGenres } from "../../actions/genres.actions";
import { getApi } from "../../actions/api.actions";
// import Loader from "../../components/Loader/Loader";
import InfiniteScroll from "react-infinite-scroller";

class Upcoming extends Component {
  state = {
    totalPages: 1,
    page: 1,
    results: []
  };

  componentDidMount() {
    this.props.getApi();
    //wola funkcje, dostaje od razu 20 rezultatow
    this.props.getUpcoming(this.props.api, this.state.page);
    this.props.getGenres(this.props.api);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.movies.total_pages !== prevState.totalPages) {
      return {
        totalPages: nextProps.movies.total_pages,
        page: nextProps.movies.page,
        results: nextProps.movies.results
      };
    }
  }
  componentWillUnmount() {
    this.setState({
      totalPages: 1,
      page: 1,
      results: []
    });
  }

  getMore = () => {
    if (this.state.page !== this.state.totalPages) {
      this.setState(prevState => ({
        page: prevState.page + 1,
        // results: this.state.results.concat(this.props.movies.results)
        results: this.state.results.concat(this.props.movies.results)
      }));
      this.props.getUpcoming(this.props.api, this.state.page);
    }
  };

  render() {
    // console.log(this.props.movies.results);
    const movies = this.state.results;
    return (
      <InfiniteScroll pageStart={1} loadMore={this.getMore} hasMore={true}>
        <div className="main">
          <h1 className="main__heading">Upcoming movies</h1>

          <div className="main__container">
            <UpcomingItem genres={this.props.genres.genres} movies={movies} />
          </div>
        </div>
      </InfiniteScroll>
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
