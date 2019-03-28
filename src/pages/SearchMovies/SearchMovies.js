import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../MainStyling.scss";
import { withRouter } from "react-router-dom";
import { getApi } from "../../actions/api.actions";
import { getGenres } from "../../actions/genres.actions";
import { getSearchResults } from "../../actions/search.actions";
import Loader from "../../components/Loader/Loader";
// import InfiniteScroll from "react-infinite-scroller";
import SearchMoviesItem from "./SearchMoviesItem/SearchMoviesItem";

class SearchMovies extends Component {
  state = {
    totalPages: 1,
    page: 1,
    results: [],
    loaded: false,
    film: ""
  };

  componentDidMount() {
    this.props.getSearchResults(
      this.props.location.state.film,
      this.props.api,
      this.state.page
    );
    this.props.getGenres(this.props.api);
  }
  componentDidUpdate() {
    if (this.state.film !== this.props.location.state.film) {
      this.props.getSearchResults(
        this.props.location.state.film,
        this.props.api,
        1
      );
    }
    if (this.props.searchResults.total_pages !== this.state.totalPages) {
      this.setState(() => ({
        film: this.props.location.state.film,
        totalPages: this.props.searchResults.total_pages,
        page: this.props.searchResults.page,
        results: this.props.searchResults.results
      }));
    }
  }
  handlePagination = type => {
    const { page } = this.state;
    switch (type) {
      case "add":
        if (page !== this.state.totalPages) {
          this.setState({ page: page + 1 });
          this.props.getSearchResults(
            this.props.location.state.film,
            this.props.api,
            page + 1
          );
        }
        break;
      case "minus":
        if (page !== 1) {
          this.setState({ page: page - 1 });
          this.props.getSearchResults(
            this.props.location.state.film,
            this.props.api,
            page - 1
          );
        }
        break;
      default:
        return null;
    }
  };

  render() {
    const btnOff = {
      opacity: 0.2,
      cursor: "default",
      boxShadow: `0 0.2rem 0.2rem rgba(0, 0, 0, 0.5)`,
      transform: "translateY(0.1rem)"
    };
    const searchResults = this.props.searchResults.results;
    return (
      // <InfiniteScroll pageStart={0} loadMore={this.getMore} hasMore={true}>
      <div className="main">
        <h1 className="main__heading">
          Search results for "{this.props.location.state.film}"
        </h1>

        <div className="main__sort-buttons">
          <button
            style={this.state.page === 1 ? btnOff : null}
            onClick={() => {
              this.handlePagination("minus");
              // this.handleGetDiscover();
            }}
          >
            Previous
          </button>
          <button
            style={this.state.page === this.state.totalPages ? btnOff : null}
            onClick={() => {
              this.handlePagination("add");
              // this.handleGetDiscover();
              // this.plus();
            }}
          >
            Next
          </button>
        </div>
        <p className="main__sort-pages">
          Actual page: <span>{this.state.page}</span> Total pages:{" "}
          <span>{this.props.searchResults.total_pages}</span> Total results:{" "}
          <span>{this.props.searchResults.total_results}</span>
        </p>
        <div className="main__container">
          {this.props.searchResults.loaded ? (
            <SearchMoviesItem
              genres={this.props.genres.genres}
              results={searchResults}
            />
          ) : (
            <Loader />
          )}
        </div>
      </div>
      // </InfiniteScroll>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    api: state.api.api,
    genres: state.genres
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSearchResults: bindActionCreators(getSearchResults, dispatch),
    getApi: bindActionCreators(getApi, dispatch),
    getGenres: bindActionCreators(getGenres, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchMovies)
);
