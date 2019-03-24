import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getApi } from "../../actions/api.actions";
import { getGenres } from "../../actions/genres.actions";
import { getDiscover } from "../../actions/discover.actions";
import "../MainStyling.scss";

class Discover extends Component {
  state = {
    type: "popularity.desc",
    page: 1
  };

  componentDidMount() {
    this.props.getApi();
    this.props.getDiscover(this.props.api, this.state.type, this.state.page);
  }
  render() {
    return (
      <div className="main">
        <h1>im on discover page</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    api: state.api.api,
    discover: state.discover
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGenres: bindActionCreators(getGenres, dispatch),
    getApi: bindActionCreators(getApi, dispatch),
    getDiscover: bindActionCreators(getDiscover, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
