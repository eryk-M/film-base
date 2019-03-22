import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";

import { getTopPeople } from "../../actions/topPeople.actions";
import { getApi } from "../../actions/api.actions";
import TopPeopleItem from "./TopPeopleItem/TopPeopleItem.js";
import InfiniteScroll from "react-infinite-scroller";
import "../MainStyling.scss";

import WOW from "wowjs";
class TopPeople extends Component {
  state = {
    totalPages: 1,
    page: 1,
    results: []
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    if (typeof window !== "undefined") {
      const wow = new WOW.WOW({
        live: false
      });
      wow.init();
      wow.sync();
    }
    this.props.getApi();
    this.props.getTopPeople(this.props.api, this.state.page);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.topPeople.total_pages !== this.state.totalPages) {
      this.setState({
        totalPages: newProps.topPeople.total_pages,
        page: newProps.topPeople.page,
        results: newProps.topPeople.results
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
        results: this.state.results.concat(this.props.topPeople.results)
      }));

      this.props.getTopPeople(this.props.api, this.state.page);
    }
  };
  render() {
    const topPeople = this.state.results;
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.getMore}
        hasMore={true}
        loader={this.state.page < 12 ? <Loader /> : null}
      >
        <div className="main">
          <h1 className="main__heading">top rated people</h1>
          <div className="main__container">
            {this.props.topPeople.loaded ? null : <Loader />}

            <TopPeopleItem people={topPeople} visible={this.state.visible} />
          </div>
        </div>
      </InfiniteScroll>
    );
  }
}

function mapStateToProps(state) {
  return {
    // genres: state.genres,
    topPeople: state.topPeople,
    loaded: state.loaded,
    api: state.api.api
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTopPeople: bindActionCreators(getTopPeople, dispatch),
    getApi: bindActionCreators(getApi, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPeople);
