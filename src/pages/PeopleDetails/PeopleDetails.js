import React, { Component } from "react";

import { bindActionCreators } from "redux";

import "./PeopleDetails.scss";

import { connect } from "react-redux";

import { getApi } from "../../actions/api.actions";
import { getPeopleDetails } from "../../actions/peopleDetails.actions";

import Loader from "../../components/Loader/Loader";
// import Swiper from "react-id-swiper";
// import { Pagination, Navigation } from "swiper/dist/js/swiper.esm";

class PeopleDetails extends Component {
  state = {
    loaded: false,
    porfile_path: ""
  };

  componentDidMount() {
    this.props.getApi();
    this.props.getPeopleDetails(this.props.match.params.id, this.props.api);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.peopleDetails.profile_path !== this.state.profile_path) {
      this.setState({
        profile_path: newProps.peopleDetails.profile_path
      });
    }
  }
  render() {
    const { peopleDetails } = this.props;
    console.log(peopleDetails);

    // const profileImage = `https://image.tmdb.org/t/p/w300${
    //   peopleDetails.profile_path
    // }`;
    const profileImage = `https://image.tmdb.org/t/p/w300${
      this.state.profile_path
    }`;
    return (
      <>
        <div className="people">
          {this.props.peopleDetails.loaded ? null : <Loader />}
          <div className="people__image-wrapper">
            <img className="people__image" src={profileImage} alt="" />
          </div>
          <div className="people__text-box">
            {peopleDetails.deathday ? <i class="fas fa-ribbon" /> : null}
            <h3 className="people__name">{peopleDetails.name}</h3>
            <div className="people__info">
              <p className="people__info-para">Info</p>
              <p className="people__birth-day">
                Born: {peopleDetails.birthday}
              </p>
              <p className="people__birth">{peopleDetails.place_of_birth}</p>
              {peopleDetails.deathday ? (
                <p className="people__death">Died: {peopleDetails.deathday}</p>
              ) : null}
              <p className="people__popularity">
                Popularity: {peopleDetails.popularity}
              </p>
            </div>
            <div className="people__biography">
              <h3 className="people__biography-heading">Biography</h3>
              <p className="people__biography-paragraph">
                {peopleDetails.biography}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    api: state.api.api,
    peopleDetails: state.peopleDetails
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getApi: bindActionCreators(getApi, dispatch),
    getPeopleDetails: bindActionCreators(getPeopleDetails, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleDetails);
