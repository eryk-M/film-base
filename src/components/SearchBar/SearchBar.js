import React, { Component } from "react";

import ScrollUp from "../ScrollUp/ScrollUp";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import "./SearchBar.scss";
import Login from "../Login/Login";
import LoginButton from "../LoginButton/LoginButton";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getRequestToken } from "../../actions/auth/getRequestToken.actions";
import { deleteSession } from "../../actions/auth/deleteSession.actions";
import { changeStatus } from "../../actions/auth/changeStatus.actions";
import { getApi } from "../../actions/api.actions";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {
    searchValue: "",
    login: false
  };

  handleLogin = () => {
    this.setState({
      login: !this.state.login
    });

    this.props.getRequestToken(this.props.api);
  };
  handleLogout = () => {
    this.props.deleteSession(this.props.api, this.props.sessionID.session_id);
    localStorage.removeItem("session");
    this.props.changeStatus({ status: false });
    this.props.history.push({
      pathname: "/"
    });
  };
  handleGuest = () => {
    this.props.changeStatus({ status: "guest" });
    this.setState({
      login: !this.state.login
    });
  };
  render() {
    return (
      <div className="imHere">
        <p className="scroll__to" />
        <div className="searchbar">
          <Login
            requestToken={this.props.requestToken.request_token}
            show={this.state.login}
            guest={this.handleGuest}
          />
          <Logo />
          <Search />
          {this.props.status ? (
            <div className="searchbar__profile">
              <Link
                className="searchbar__profile-user"
                to={`/profile/${this.props.status}`}
              >
                <i className="fas fa-user" />
              </Link>
              <button
                className="searchbar__profile-logout"
                onClick={this.handleLogout}
              >
                <i className="fas fa-sign-out-alt" />
              </button>

            </div>
          ) : (
            <LoginButton click={this.handleLogin} />
          )}
          <ScrollUp />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    api: state.api.api,
    requestToken: state.requestToken,

    sessionID: state.sessionID,
    del_session: state.del_session,
    status: state.status.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getApi: bindActionCreators(getApi, dispatch),
    getRequestToken: bindActionCreators(getRequestToken, dispatch),
    deleteSession: bindActionCreators(deleteSession, dispatch),
    changeStatus: bindActionCreators(changeStatus, dispatch)
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
