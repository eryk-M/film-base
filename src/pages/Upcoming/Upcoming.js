import React, { Component } from "react";

import UpcomingItem from "./UpcomingItem/UpcomingItem";

import "./Upcoming.scss";
// import Swiper from "swiper";

const API = "2a5d7298a94408e98274cd600f658034";

class Upcoming extends Component {
  state = {
    title: "Mary popins",
    voteAverage: 5,
    voteCount: 1000,
    releaseDate: "2019-03-03",
    items: []
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API}&language=pl-PL&page=1`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data.results
        });
      });
  }

  render() {
    return (
      <div className="upcoming">
        {/* <h1 className="heading">Upcoming</h1> */}
        <UpcomingItem items={this.state.items} />
      </div>
    );
  }
}

export default Upcoming;
