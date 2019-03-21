import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { getGenres } from "../../actions/genres.actions";
import { getTopTV } from "../../actions/topTV.actions";
import { getApi } from "../../actions/api.actions";
import TopTVItem from "./TopTVItem/TopTVItem";
import LoadMore from "../../components/LoadMore/LoadMore";
import "../MainStyling.scss";

class TopTV extends Component {
  state = {
    visible: 10
  };
  componentDidMount() {
    this.props.getApi();
    this.props.getTopTV(this.props.api);
    this.props.getGenres(this.props.api);
  }

  //DO PRZEMYSLENIA, PO CHUK DWA RAZY TO SAMO DEBILU

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 10 };
    });
  };

  render() {
    const topTV = this.props.topTV.results;
    console.log(topTV);
    return (
      <div className="main">
        <h1 className="main__heading">Top rated tv shows</h1>
        <div className="main__container">
          {this.props.topTV.loaded ? null : <Loader />}

          <TopTVItem
            genres={this.props.genres.genres}
            topTV={topTV}
            visible={this.state.visible}
          />

          {this.state.visible < topTV.length && (
            <LoadMore
              className="wow fadeIn"
              data-wow-delay="2s"
              click={this.loadMore}
            />
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
