import React, { Component } from "react";
import UpcomingItem from "./UpcomingItem/UpcomingItem";
import "../MainStyling.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getUpcoming } from "../../actions/upcoming.actions";
import { getGenres } from "../../actions/genres.actions";

import { animateScroll as scroll } from "react-scroll";
import Paginate from "../../components/Paginate/Paginate";

import Loader from "../../components/Loader/Loader";

class Upcoming extends Component {
  state = {
    totalPages: 1,
    page: 1,
    results: []
  };

  componentDidMount() {
    this.props.getUpcoming(this.props.api, this.state.page);
    this.props.getGenres(this.props.api);
  }

  componentDidUpdate() {
    if (this.props.movies.total_pages !== this.state.totalPages) {
      this.setState(() => ({
        totalPages: this.props.movies.total_pages,
        page: this.props.movies.page,
        results: this.props.movies.results
      }));
    }
  }

  handlePageClick = data => {
    let selected = data.selected + 1;
    this.props.getUpcoming(this.props.api, selected);
    this.setState({
      page: selected,
      results: this.props.movies.results
    });
    scroll.scrollToTop();
  };

  render() {
    const movies = this.props.movies.results;

    return (
      <div className="main">
        <div className="main__info">
          <h1 className="main__heading">Upcoming movies</h1>

          {this.props.movies.total_results ? (
            <p>{this.props.movies.total_results} results</p>
          ) : null}
        </div>
        <div className="main__container">
          {this.props.movies.isLoading ? (
            <Loader />
          ) : (
            <>
              <UpcomingItem genres={this.props.genres.genres} movies={movies} />
              <Paginate
                selected={this.state.page - 1}
                totalPages={this.state.totalPages}
                handlePageClick={this.handlePageClick}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    isLoading: state.isLoading,
    genres: state.genres,
    api: state.api.api
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
