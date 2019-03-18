import React, { Component } from "react";

class Search extends Component {
  state = {
    film: ""
  };

  render() {
    return (
      <div className="search">
        <form>
          <input type="text" placeholder="Szukaj filmu..." />
          <button>Szukaj</button>
        </form>
      </div>
    );
  }
}

export default Search;
