import React, { Component } from "react";
import "./Search.scss";

import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getResult } from "../../actions/search.actions";
class Search extends Component {
  state = {
    film: "",
    redirect: false
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.film);
    this.setState({
      redirect: true
    });
    this.props.history.push("/results");
  };

  handleChange = e => {
    this.setState({
      film: e.target.value
    });
  };

  render() {
    // console.log(this.props.results);
    // console.log(this.props.history);
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <i className="fas fa-search" />
          <input
            type="text"
            placeholder="Search movies..."
            value={this.state.film}
            onChange={this.handleChange}
          />
          {/* <span /> */}
          <button>Szukaj</button>
          {/* <i class="fas fa-search" /> */}
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.results
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getResult: bindActionCreators(getResult, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Search));
