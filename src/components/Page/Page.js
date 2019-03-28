import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Upcoming from "../../pages/Upcoming/Upcoming";
import TopMovies from "../../pages/TopMovies/TopMovies";
import TopPeople from "../../pages/TopPeople/TopPeople";
import TopTV from "../../pages/TopTV/TopTV";
import SearchMovies from "../../pages/SearchMovies/SearchMovies";
import MovieDetails from "../../pages/MovieDetails/MovieDetails";
import PeopleDetails from "../../pages/PeopleDetails/PeopleDetails";
import Discover from "../../pages/Discover/Discover";
import NotFound from "../../pages/NotFound/NotFound";
import Profile from "../../pages/Profile/Profile";

class Page extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Upcoming} />
          <Route path="/movies/top" exact component={TopMovies} />
          <Route path="/people/top" exact component={TopPeople} />
          <Route path="/tv/top" exact component={TopTV} />
          <Route path="/results" exact component={SearchMovies} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/people/:id" exact component={PeopleDetails} />
          <Route path="/discover" exact component={Discover} />

          <Route path="/profile/user" exact component={Profile} />
          <Route path="/profile/guest" exact component={Profile} />
          <Route path="/profile/approved" exact component={Profile} />
          {/* {!this.props.status || this.props.sessionID.failure ? (
            <Redirect from="/profile" to="/" />
          ) : (
            <Redirect from="/profile" to="/profile/user" />
          )}

          {this.props.status === "guest" ? (
            <Redirect from="/profile/user" to="profile/guest" />
          ) : (
            <Redirect from="/profile/guest" to="/" />
          )} */}

          <Route path="*" component={NotFound} />

          {/* <Redirect from="/profile/guest" to="/" /> */}

          {/* {!this.props.status ? (
            <Redirect from="/profile/guest" to="/" />
          ) : null} */}
        </Switch>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    sessionID: state.sessionID,
    status: state.status.status
  };
}

export default connect(
  mapStateToProps,
  null
)(Page);
