import React, { Component } from "react";
import "./main.scss";

import NavBar from "./components/NavBar/NavBar";
// import Search from "./components/Search/Search";
import Upcoming from "./components/Upcoming/Upcoming";
import People from "./components/People/People";
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
      <div className="App">
        <NavBar />
        <Upcoming />
        <People />
      </div>
    );
  }
}

export default App;
