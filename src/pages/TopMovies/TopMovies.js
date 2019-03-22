import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { getGenres } from "../../actions/genres.actions";
import { getTopMovies } from "../../actions/topMovies.actions";
import { getApi } from "../../actions/api.actions";
import TopMoviesItem from "./TopMoviesItem/TopMoviesItem";
import InfiniteScroll from "react-infinite-scroller";
import "../MainStyling.scss";

class TopMovies extends Component {
  state = {
    totalPages: 1,
    page: 1,
    results: []
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getApi();
    this.props.getTopMovies(this.props.api);
    this.props.getGenres(this.props.api);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.topMovies.total_pages !== this.state.totalPages) {
      this.setState({
        totalPages: newProps.topMovies.total_pages,
        page: newProps.topMovies.page,
        results: newProps.topMovies.results
      });
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
        results: this.state.results.concat(this.props.topMovies.results)
      }));

      this.props.getTopMovies(this.props.api, this.state.page);
    }
  };

  render() {
    const topMovies = this.state.results;
    return (
      <InfiniteScroll
        pageStart={1}
        loadMore={this.getMore}
        hasMore={true}
        loader={this.state.page < 12 ? <Loader /> : null}
      >
        <div className="main">
          <h1 className="main__heading">Top rated movies</h1>
          <div className="main__container">
            {this.props.topMovies.loaded ? null : <Loader />}

            <TopMoviesItem
              genres={this.props.genres.genres}
              movies={topMovies}
            />
          </div>
        </div>
      </InfiniteScroll>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    topMovies: state.topMovies,
    loaded: state.loaded,
    api: state.api.api
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGenres: bindActionCreators(getGenres, dispatch),
    getTopMovies: bindActionCreators(getTopMovies, dispatch),
    getApi: bindActionCreators(getApi, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMovies);
