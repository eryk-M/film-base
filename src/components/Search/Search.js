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
          <input type="text" placeholder="Search movies..." />
          {/* <button>Szukaj</button> */}
        </form>
      </div>
    );
  }
}

export default Search;
