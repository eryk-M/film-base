import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";

import { getTopPeople } from "../../actions/topPeople.actions";
import TopPeopleItem from "./TopPeopleItem/TopPeopleItem.js";
import LoadMore from "../../components/LoadMore/LoadMore";
import "../MainStyling.scss";

import WOW from "wowjs";
class TopPeople extends Component {
  state = {
    visible: 10
  };
  componentDidMount() {
    this.props.getTopPeople();
    if (typeof window !== "undefined") {
      const wow = new WOW.WOW({
        live: false
      });
      wow.init();
    }

    // setTimeout(() => {
    //   document.querySelector(".main__image").classList.add("fadeIn");
    // }, 2000);
  }

  //DO PRZEMYSLENIA, PO CHUK DWA RAZY TO SAMO DEBILU

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 10 };
    });
  };

  render() {
    console.log(this.props);

    const topPeople = this.props.topPeople.results;
    return (
      <div className="main">
        <h1 className="main__heading">top rated people</h1>
        <div className="main__container">
          {this.props.topPeople.loaded ? null : <Loader />}

          <TopPeopleItem people={topPeople} visible={this.state.visible} />

          {this.state.visible < topPeople.length && (
            <LoadMore click={this.loadMore} /> /* < I TO */
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // genres: state.genres,
    topPeople: state.topPeople,
    loaded: state.loaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTopPeople: bindActionCreators(getTopPeople, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPeople);
