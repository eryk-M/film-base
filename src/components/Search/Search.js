import React, { Component } from "react";
import "./Search.scss";
import { withRouter } from "react-router-dom";
import icons from "../../assets/icons.svg";
class Search extends Component {
  state = {
    film: "",
    redirect: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.refs.input.blur();
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
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            ref="input"
            type="text"
            placeholder="Search movies..."
            value={this.state.film}
            onChange={this.handleChange}
          />
          <svg className="icon icon-search">
            <use xlinkHref={`${icons}#icon-search`} />
          </svg>
          <span />
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
