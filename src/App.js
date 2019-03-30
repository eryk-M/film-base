import "./styles/main.scss";
import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ScrollToTop from "./hoc/ScrollToTop/ScrollToTop";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page/Page";
import Burger from "./components/Burger/Burger";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App" id="outer-container">
            <Burger
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
            />
            <div id="page-wrap">
              <SearchBar />
              <main>
                <aside>
                  <Navigation />
                </aside>
                <Page />
              </main>
            </div>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
