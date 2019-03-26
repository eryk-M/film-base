import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getGenres } from "../../actions/genres.actions";
import { getTopMovies } from "../../actions/topMovies.actions";
import { getApi } from "../../actions/api.actions";
import TopMoviesItem from "./TopMoviesItem/TopMoviesItem";
// import InfiniteScroll from "react-infinite-scroller";
import "../MainStyling.scss";
import { animateScroll as scroll } from "react-scroll";
import Paginate from "../../components/Paginate/Paginate";

class TopMovies extends Component {
  state = {
    totalPages: 1,
    page: 1,
    results: []
  };
  componentDidMount() {
    this.props.getApi();
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

          {this.props.topMovies.total_results ? (
            <p>{this.props.topMovies.total_results} results</p>
          ) : null}
        </div>
        <div className="main__container">
          <TopMoviesItem genres={this.props.genres.genres} movies={topMovies} />

          {this.state.results.length > 19 ? (
            <Paginate
              totalPages={this.state.totalPages}
              handlePageClick={this.handlePageClick}
            />
          ) : null}
        </div>
      </div>
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
