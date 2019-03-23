import React, { Component } from "react";
import "./Search.scss";
import { withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    film: "",
    redirect: false
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.film);
    this.setState({
      redirect: true,
      film: ""
    });
    this.props.history.push({
      pathname: "/results",
      state: {
        film: this.state.film
      }
    });
    window.scrollTo(0, 0);
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
          {/* <button>Szukaj</button> */}
          {/* <i class="fas fa-search" /> */}
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
