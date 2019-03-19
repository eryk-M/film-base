import React, { Component } from "react";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";

import SearchBar from "./components/SearchBar/SearchBar";
// import Search from "./components/Search/Search";
// import Upcoming from "./pages/Upcoming/Upcoming";
// import People from "./components/People/People";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page/Page";
const API = "2a5d7298a94408e98274cd600f658034";

class App extends Component {
  state = {};

  componentWillMount() {
    console.log("component will update");
  }

  // componentDidMount() {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/now_playing?api_key=${API}&language=pl-PL&page=1`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     });
  // }

  render() {
    console.log("render");
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;
