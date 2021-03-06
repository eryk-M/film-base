import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { postSession } from "../../actions/auth/postSessionId.actions";
import { getAccountDetails } from "../../actions/auth/getAccountDetails.actions";
import { changeStatus } from "../../actions/auth/changeStatus.actions";
import { getMovieFavorites } from "../../actions/userFavorites/movieFavorites.actions";
import { getTVFavorites } from "../../actions/userFavorites/TVFavorites.actions";
import { Link } from "react-router-dom";
import "./Profile.scss";
import noImage from "../../assets/images/no_image.png";
class Profile extends Component {
  componentDidMount() {
    const approved = Boolean(this.props.location.search.split("&approved=")[1]);
    const session = localStorage.getItem("session");
    const userID = localStorage.getItem("user_id");
    if (approved) {
      this.props.postSession(
        this.props.api,
        this.takeRequestToken(this.props.location.search)
      );
      this.props.changeStatus({ status: "user" });
    } else if (this.props.status === "user") {
      this.handleGetFavorites(this.props.api, userID, session);
      this.props.getAccountDetails(this.props.api, session);
      return true;
    } else if (this.props.status === "guest") {
      this.props.history.push({
        pathname: "/profile/guest"
      });
      this.props.changeStatus({ status: "guest" });
    } else {
      this.props.history.push({
        pathname: "/"
      });
    }
  }
  componentDidUpdate() {
    if (!this.props.accountDetails.id && this.props.sessionID.session_id) {
      const session = localStorage.getItem("session");
      const userID = localStorage.getItem("user_id");
      this.props.getAccountDetails(this.props.api, session);
      this.handleGetFavorites(this.props.api, userID, session);
    }
  }

  takeRequestToken = requestToken =>
    requestToken.split("?request_token=")[1].split("&")[0];
  takeApprove = approve => approve.split("&approved=");
  handleGetFavorites = (api, accountID, sessionID) => {
    this.props.getTVFavorites(api, accountID, sessionID);
    this.props.getMovieFavorites(api, accountID, sessionID);
  };

  handleDelete = (e, api, type) => {
    const session = localStorage.getItem("session");
    const userID = localStorage.getItem("user_id");
    fetch(
      `https://api.themoviedb.org/3/account/${userID}/favorite?api_key=${api}&session_id=${session}`,
      {
        method: "POST",
        body: JSON.stringify({
          media_type: type,
          media_id: e.target.id,
          favorite: false
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then((document.getElementById(`${e.target.id}`).style.display = "none"))
      .then(() => {
        this.props.getTVFavorites(api, userID, session);
        this.props.getMovieFavorites(api, userID, session);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="profile">
        <h1 className="profile__heading">
          Username:{" "}
          <span
            style={
              this.props.status === "guest"
                ? { color: "orangered" }
                : { color: "var(--color-arrow-1" }
            }
          >
            {" "}
            {this.props.status === "guest"
              ? "GUEST"
              : this.props.accountDetails.username}
          </span>
        </h1>
        <div className="profile__favorites">
          <h2 className="profile__heading-secondary">
            Your favorite movies{" "}
            {this.props.movieFavorites.results.length >= 1
              ? ` (${this.props.movieFavorites.results.length})`
              : " (0)"}
          </h2>
          <div className="profile__movies">
            {this.props.status === "guest" ? (
              <div className="profile__guest">
                <p>
                  You cant add movies to favorites, because you have{" "}
                  <span>GUEST</span> status
                </p>
              </div>
            ) : (
              this.props.movieFavorites.results.map(result => (
                <div
                  id={result.id}
                  key={result.id}
                  className="profile__movies-item"
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/details/movies/${result.id}`}
                  >
                    <img
                      className="profile__image"
                      src={
                        result.poster_path
                          ? `https://image.tmdb.org/t/p/w342${
                              result.poster_path
                            }`
                          : noImage
                      }
                      alt={result.title}
                    />

                    <h3 className="profile__movies-item-heading">
                      {result.title}
                    </h3>
                  </Link>
                  <button
                    id={result.id}
                    onClick={e => this.handleDelete(e, this.props.api, "movie")}
                    className="profile__movies-delete"
                  >
                    X
                  </button>
                </div>
              ))
            )}
          </div>

          <h2 className="profile__heading-secondary">
            Your favorite TV shows{" "}
            {this.props.TVFavorites.results.length >= 1
              ? ` (${this.props.TVFavorites.results.length})`
              : " (0)"}
          </h2>
          <div className="profile__tv">
            {this.props.status === "guest" ? (
              <div className="profile__guest">
                <p>
                  You cant add TV shows to favorites, because you have{" "}
                  <span>GUEST</span> status
                </p>
              </div>
            ) : (
              this.props.TVFavorites.results.map(result => (
                <div
                  id={result.id}
                  key={result.id}
                  className="profile__movies-item"
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/details/tv/${result.id}`}
                  >
                    <img
                      className="profile__image"
                      src={
                        result.poster_path
                          ? `https://image.tmdb.org/t/p/w342${
                              result.poster_path
                            }`
                          : noImage
                      }
                      alt={result.original_name}
                    />

                    <h3 className="profile__movies-item-heading">
                      {result.original_name}
                    </h3>
                  </Link>
                  <button
                    id={result.id}
                    onClick={e => this.handleDelete(e, this.props.api, "tv")}
                    className="profile__movies-delete"
                  >
                    X
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    api: state.api.api,
    accountDetails: state.accountDetails,
    sessionID: state.sessionID,
    status: state.status.status,
    movieFavorites: state.movieFavorites,
    TVFavorites: state.TVFavorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postSession: bindActionCreators(postSession, dispatch),
    getAccountDetails: bindActionCreators(getAccountDetails, dispatch),
    changeStatus: bindActionCreators(changeStatus, dispatch),
    getMovieFavorites: bindActionCreators(getMovieFavorites, dispatch),
    getTVFavorites: bindActionCreators(getTVFavorites, dispatch)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
