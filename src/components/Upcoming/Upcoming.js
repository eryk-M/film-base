import React, { Component } from "react";

import UpcomingItem from "./UpcomingItem/UpcomingItem";

import "./Upcoming.scss";
import Swiper from "swiper";

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
    // (() => {
    //   const movieSlider = document.querySelector(".swiper-container");

    //   const swiper = new Swiper(movieSlider, {
    //     slidesPerView: 3,
    //     loop: true,
    //     spaceBetween: 0
    //   });
    // })();

    (() => {
      //   const sliderEl = document.querySelectorAll(".swiper-container");
      //   new Swiper(sliderEl, {
      //     init: true,
      //     slidesPerView: 4,
      //     loop: true,
      //     speed: 200,
      //     spaceBetween: "200px",
      //     navigation: {
      //       nextEl: ".swiper-button-next",
      //       prevEl: ".swiper-button-prev"
      //     }
      //   });
      const mySwiper = new Swiper(".swiper-container", {
        speed: 400,
        spaceBetween: 100
      });
    })();

    return (
      <div className="upcoming">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <UpcomingItem items={this.state.items} />
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
    );
  }
}

export default Upcoming;
