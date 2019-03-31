import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTopPeople } from "../../actions/topPeople.actions";
import TopPeopleItem from "./TopPeopleItem/TopPeopleItem.js";
import "../MainStyling.scss";
import { animateScroll as scroll } from "react-scroll";
import Paginate from "../../components/Paginate/Paginate";
import Loader from "../../components/Loader/Loader";
class TopPeople extends Component {
  state = {
    totalPages: 1,
    page: 1,
    results: []
  };
  componentDidMount() {
    this.props.getTopPeople(this.props.api, this.state.page);
  }

  componentDidUpdate() {
    if (this.props.topPeople.total_pages !== this.state.totalPages) {
      this.setState(() => ({
        totalPages: this.props.topPeople.total_pages,
        page: this.props.topPeople.page,
        results: this.props.topPeople.results
      }));
    }
  }
  handlePageClick = data => {
    let selected = data.selected + 1;

    this.props.getTopPeople(this.props.api, selected);
    this.setState({
      page: selected,
      results: this.props.topPeople.results
    });
    scroll.scrollToTop();
  };
  render() {
    const topPeople = this.props.topPeople.results;
    return (
      <div className="main">
        <div className="main__info">
          <h1 className="main__heading">top rated people</h1>

          {this.props.topPeople.total_results ? (
            <p>{this.props.topPeople.total_results} results</p>
          ) : null}
        </div>
        <div className="main__container">
          {this.props.topPeople.isLoading ? (
            <Loader />
          ) : (
            <TopPeopleItem people={topPeople} visible={this.state.visible} />
          )}

          {this.state.results.length >= 1 ? (
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
    topPeople: state.topPeople,
    api: state.api.api
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
