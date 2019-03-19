import React, { Component } from "react";
import "./Search.scss";

class Search extends Component {
  state = {
    film: ""
  };

  render() {
    return (
      <div className="search">
        <form>
          <i className="fas fa-search" />
          <input type="text" placeholder="Search movies..." />
          {/* <span /> */}
          {/* <button>Szukaj</button> */}
          {/* <i class="fas fa-search" /> */}
        </form>
      </div>
    );
  }
}

export default Search;
