import React, { Component } from "react";

import { bindActionCreators } from "redux";

import "./PeopleDetails.scss";

import { connect } from "react-redux";

import { getPeopleDetails } from "../../actions/peopleDetails.actions";
import { getPeopleCredits } from "../../actions/peopleMovieCredits.actions";
import { withRouter } from "react-router-dom";

import Loader from "../../components/Loader/Loader";
import PeopleDetailsMovie from "../../pages/PeopleDetails/PeopleDetailsMovie/PeopleDetailsMovie";
import Swiper from "react-id-swiper";
import { Navigation } from "swiper/dist/js/swiper.esm";

class PeopleDetails extends Component {
  state = {
    loaded: false,
    profile_path: ""
  };

  componentDidMount() {
    this.props.getPeopleDetails(this.props.match.params.id, this.props.api);
    this.props.getPeopleCredits(this.props.match.params.id, this.props.api);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.peopleDetails.profile_path !== this.state.profile_path) {
      this.setState({
        profile_path: newProps.peopleDetails.profile_path
      });
    }
  }

  render() {
    const error = { ...this.props.peopleDetails.errors };
    if (error[0] === "id is not a valid integer") {
      this.props.history.push({
        pathname: "/error"
      });
    }
    const datem = new Date().getUTCMonth();
    const datey = new Date().getFullYear();
    const dated = new Date().getUTCDate();
    const yearsy = new Date(this.props.peopleDetails.birthday).getFullYear();
    const yearsm = new Date(this.props.peopleDetails.birthday).getUTCMonth();
    const yearsd = new Date(this.props.peopleDetails.birthday).getUTCDate();

    let yo = 0;
    // 2 > 2 ?
    if (yearsm > datem) {
      yo = datey - yearsy - 1;
      //2 > 2?
    } else if (datem > yearsm) {
      yo = datey - yearsy;
    } else if (datem === yearsm) {
      //24 > 14 ?
      if (dated > yearsd) {
        //yo = 2019 - 1933
        yo = datey - yearsy;
      } else if (yearsd > dated) {
        yo = datey - yearsy - 1;
      } else {
        yo = "ARE U KIDDING ME? HAPPY BIRTHDAY " + (datey - yearsy);
      }
    }

    const { peopleDetails } = this.props;

    const params = {
      modules: [Navigation],

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      spaceBetween: 30,
      slidesPerView: 5,
      rebuildOnUpdate: true,
      shouldSwiperUpdate: true
    };
    const profileImage = `https://image.tmdb.org/t/p/w300${
      this.state.profile_path
    }`;

    const cast = this.props.peopleCredits.cast;
    const grayDied = {
      filter: "grayscale(1)"
    };
    return (
      <>
        <div className="people">
          {this.props.peopleDetails.loaded ? null : <Loader />}
          <div className="people__right-wrapper">
            <div className="people__image-wrapper">
              {this.state.profile_path ? (
                <img
                  style={peopleDetails.deathday ? grayDied : null}
                  className="people__image"
                  src={profileImage}
                  alt={`${peopleDetails.name}`}
                />
              ) : (
                <p className="people__image-found">No image found</p>
              )}
            </div>

            <div className="people__text-box">
              {peopleDetails.deathday ? <i class="fas fa-ribbon" /> : null}
              <h3 className="people__name">{peopleDetails.name}</h3>
              <div className="people__info">
                <p className="people__info-para">Info</p>
                <p className="people__birth-day">
                  Born:{" "}
                  {peopleDetails.birthday
                    ? peopleDetails.birthday + `   / ${yo} years old`
                    : "No info"}
                </p>
                <p className="people__birth">{peopleDetails.place_of_birth}</p>
                {peopleDetails.deathday ? (
                  <p className="people__death">
                    Died: {peopleDetails.deathday}
                  </p>
                ) : null}
                <p className="people__popularity">
                  Popularity:{" "}
                  {peopleDetails.popularity
                    ? peopleDetails.popularity
                    : "No info"}
                </p>
              </div>
              <div className="people__biography">
                <h3 className="people__biography-heading">Biography</h3>
                <p className="people__biography-paragraph">
                  {peopleDetails.biography
                    ? peopleDetails.biography
                    : "No info"}
                </p>
              </div>
            </div>
          </div>
          <div className="people__cast">
            <p className="people__cast-heading heading-details">Cast</p>
            {cast.length > 0 && (
              <Swiper {...params}>
                <PeopleDetailsMovie cast={cast} />
              </Swiper>
            )}
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    api: state.api.api,
    peopleDetails: state.peopleDetails,
    peopleCredits: state.peopleCredits
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPeopleDetails: bindActionCreators(getPeopleDetails, dispatch),
    getPeopleCredits: bindActionCreators(getPeopleCredits, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PeopleDetails)
);
