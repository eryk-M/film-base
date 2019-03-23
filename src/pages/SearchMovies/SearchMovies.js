import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../MainStyling.scss";
import { withRouter } from "react-router-dom";
import { getApi } from "../../actions/api.actions";
import { getGenres } from "../../actions/genres.actions";
import { getSearchResults } from "../../actions/search.actions";
import Loader from "../../components/Loader/Loader";
import InfiniteScroll from "react-infinite-scroller";
import SearchMoviesItem from "./SearchMoviesItem/SearchMoviesItem";

class SearchMovies extends Component {
  state = {
    totalPages: 1,
    page: 1,
    results: [],
    loaded: false
  };

  componentDidMount() {
    this.props.getSearchResults(
      this.props.location.state.film,
      this.props.api,
      this.state.page
    );
    this.props.getGenres(this.props.api);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.location.state.film !== this.props.location.state.film) {
      this.props.getSearchResults(newProps.location.state.film, this.props.api);
    }
    if (newProps.searchResults.total_pages !== this.state.totalPages) {
      this.setState({
        totalPages: newProps.searchResults.total_pages,
        page: newProps.searchResults.page,
        results: newProps.searchResults.results
      });
    }
  }
  getMore = () => {
    if (this.state.page !== this.state.totalPages) {
      this.setState(prevState => ({
        page: prevState.page + 1,
        results: this.state.results.concat(this.props.searchResults.results)
      }));

      this.props.getSearchResults(
        this.props.location.state.film,
        this.props.api,
        this.state.page
      );
    }
  };

  render() {
    const searchResults = this.state.results;
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.getMore}
        hasMore={true}
        loader={
          this.state.page === this.props.searchResults.total_pages ? (
            <Loader />
          ) : null
        }
      >
        <div className="main">
          <h1 className="main__heading">
            Search results for "{this.props.location.state.film}"
          </h1>
          <p className="search__results">
            Found:
            {" " + this.props.searchResults.total_results + " movies"}
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
      </InfiniteScroll>
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
