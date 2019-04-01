import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getGenres } from "../../actions/genres.actions";
import { getTopMovies } from "../../actions/topMovies.actions";
import TopMoviesItem from "./TopMoviesItem/TopMoviesItem";
// import InfiniteScroll from "react-infinite-scroller";
import "../MainStyling.scss";
import { animateScroll as scroll } from "react-scroll";
import Paginate from "../../components/Paginate/Paginate";

import Loader from "../../components/Loader/Loader";

class TopMovies extends Component {
  state = {
    totalPages: 1,
    page: 1,
    results: []
  };
  componentDidMount() {
    this.props.getTopMovies(this.props.api, this.state.page);
    this.props.getGenres(this.props.api);
  }

  componentDidUpdate() {
    if (this.props.topMovies.total_pages !== this.state.totalPages) {
      this.setState(() => ({
        totalPages: this.props.topMovies.total_pages,
        page: this.props.topMovies.page,
        results: this.props.topMovies.results
      }));
    }
  }

  handlePageClick = data => {
    let selected = data.selected + 1;

    this.props.getTopMovies(this.props.api, selected);
    this.setState({
      page: selected,
      results: this.props.topMovies.results
    });
    scroll.scrollToTop();
  };
  render() {
    const topMovies = this.props.topMovies.results;
    return (
      <div className="main">
        <div className="main__info">
          <h1 className="main__heading">Top movies</h1>

          {this.props.topMovies.isLoading ? null : (
            <p>{this.props.topMovies.total_results} results</p>
          )}
        </div>
        <div className="main__container">
          {this.props.topMovies.isLoading ? (
            <Loader />
          ) : (
            <>
              <TopMoviesItem
                genres={this.props.genres.genres}
                movies={topMovies}
              />
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
    genres: state.genres,
    topMovies: state.topMovies,
    api: state.api.api
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGenres: bindActionCreators(getGenres, dispatch),
    getTopMovies: bindActionCreators(getTopMovies, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMovies);
