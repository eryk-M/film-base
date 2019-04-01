import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { getGenres } from "../../actions/genres.actions";
import { getTopTV } from "../../actions/topTV.actions";
import TopTVItem from "./TopTVItem/TopTVItem";
import "../MainStyling.scss";

import { animateScroll as scroll } from "react-scroll";
import Paginate from "../../components/Paginate/Paginate";

class TopTV extends Component {
  state = {
    totalPages: 1,
    page: 1,
    results: []
  };
  componentDidMount() {
    this.props.getTopTV(this.props.api, this.state.page);
    this.props.getGenres(this.props.api);
  }

  componentDidUpdate() {
    // {this.props.topTV.isLoading ? }
    if (
      this.props.topTV.total_pages !== this.state.totalPages &&
      this.props.topTV.isLoading === false
    ) {
      this.setState(() => ({
        totalPages: this.props.topTV.total_pages,
        page: this.props.topTV.page,
        results: this.props.topTV.results
      }));
    }
  }
  handlePageClick = data => {
    let selected = data.selected + 1;

    this.props.getTopTV(this.props.api, selected);
    this.setState({
      page: selected,
      results: this.props.topTV.results
    });
    scroll.scrollToTop();
  };
  render() {
    const topTV = this.props.topTV.results;
    return (
      <div className="main">
        <div className="main__info">
          <h1 className="main__heading">top rated tv shows</h1>

          {this.props.topTV.isLoading ? null : (
            <p>{this.props.topTV.total_results} results</p>
          )}
        </div>
        <div className="main__container">
          {this.props.topTV.isLoading ? (
            <Loader />
          ) : (
            <>
              <TopTVItem genres={this.props.genres.genres} topTV={topTV} />

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
    topTV: state.topTV,
    api: state.api.api
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGenres: bindActionCreators(getGenres, dispatch),
    getTopTV: bindActionCreators(getTopTV, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTV);
