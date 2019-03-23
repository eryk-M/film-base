import React, { Component } from "react";

import "./styles/main.scss";

import SearchBar from "./components/SearchBar/SearchBar";
import ScrollToTop from "./hoc/ScrollToTop/ScrollToTop";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page/Page";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {};

  componentWillMount() {
    // console.log("component will update");
  }

  render() {
    // console.log("render");
    return (
      <BrowserRouter>
        <ScrollToTop>
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
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
