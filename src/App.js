import "./styles/main.scss";
import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ScrollToTop from "./hoc/ScrollToTop/ScrollToTop";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page/Page";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {};

  render() {
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
            </main>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
