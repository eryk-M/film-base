import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { getGenres } from "../../actions/genres.actions";
import { getTopTV } from "../../actions/topTV.actions";
import { getApi } from "../../actions/api.actions";
import TopTVItem from "./TopTVItem/TopTVItem";
import "../MainStyling.scss";
import InfiniteScroll from "react-infinite-scroller";

class TopTV extends Component {
  state = {
    totalPages: 1,
    results: [],
    page: 1
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getApi();
    this.props.getTopTV(this.props.api);
    this.props.getGenres(this.props.api);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.topTV.total_pages !== this.state.totalPages) {
      this.setState({
        totalPages: newProps.topTV.total_pages,
        page: newProps.topTV.page,
        results: newProps.topTV.results
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
        results: this.state.results.concat(this.props.topTV.results)
      }));

      this.props.getTopTV(this.props.api, this.state.page);
    }
  };

  render() {
    const topTV = this.state.results;
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.getMore}
        hasMore={true}
        // loader={this.state.page < 12 ? <Loader /> : null}
      >
        <div className="main">
          <h1 className="main__heading">Top rated tv shows</h1>
          <div className="main__container">
            {this.props.topTV.loaded ? null : <Loader />}

            <TopTVItem genres={this.props.genres.genres} topTV={topTV} />
          </div>
        </div>
      </InfiniteScroll>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    topTV: state.topTV,
    loaded: state.loaded,
    api: state.api.api
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGenres: bindActionCreators(getGenres, dispatch),
    getTopTV: bindActionCreators(getTopTV, dispatch),
    getApi: bindActionCreators(getApi, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTV);
