import React, { Component } from "react";
import "./styles/main.scss";

import SearchBar from "./components/SearchBar/SearchBar";

import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page/Page";

class App extends Component {
  state = {};

  componentWillMount() {
    // console.log("component will update");
  }

  render() {
    // console.log("render");
    return (
      <div className="App">
        <SearchBar />
        <main>
          <aside>
            <Navigation />
          </aside>
          <Page />
          {/* 
            <Upcoming />
            <People /> */}
        </main>
      </div>
    );
  }
}

export default App;
