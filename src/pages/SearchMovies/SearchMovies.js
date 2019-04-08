import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../MainStyling.scss";
import { withRouter } from "react-router-dom";
import { getGenres } from "../../actions/genres.actions";
import { getSearchResults } from "../../actions/search.actions";
import MainItemDetails from "../../components/MainItemsDetails/MainItemDetails";
import Loader from "../../components/Loader/Loader";

class SearchMovies extends Component {
  state = {
    totalPages: 1,
    page: 1,
    results: [],
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
      this.setState({
        film: this.props.location.state.film
      });
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
      <div className="main">
        <h1 className="main__heading">
          Search results for "{this.props.location.state.film}"
        </h1>

        <div className="main__sort-buttons">
          <button
            style={this.state.page === 1 ? btnOff : null}
            onClick={() => {
              this.handlePagination("minus");
            }}
          >
            Previous
          </button>
          <button
            style={this.state.page === this.state.totalPages ? btnOff : null}
            onClick={() => {
              this.handlePagination("add");
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
          {this.props.searchResults.isLoading ? (
            <Loader />
          ) : (
            <MainItemDetails
              genres={this.props.genres.genres}
              movies={searchResults}
              link={`movies`}
            />
          )}
        </div>
      </div>
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
    getGenres: bindActionCreators(getGenres, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchMovies)
);
