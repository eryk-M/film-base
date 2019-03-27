import React, { Component } from "react";

import ScrollUp from "../ScrollUp/ScrollUp";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import Modal from "../Modal/Modal";
import "./SearchBar.scss";
import Login from "../Login/Login";
import LoginButton from "../LoginButton/LoginButton";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getRequestToken } from "../../actions/auth/getRequestToken.actions";
import { getApi } from "../../actions/api.actions";

import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {
    searchValue: "",
    login: false
  };

  handleLogin = () => {
    this.setState({
      login: true
    });

    document.body.style.overflow = "hidden";
    this.props.getApi();
    this.props.getRequestToken(this.props.api);
  };
  handleCancelLogin = () => {
    this.setState({
      login: false
    });
    document.body.style.overflow = "visible";
  };
  render() {
    return (
      <div className="imHere">
        <p className="scroll__to" />
        <div className="searchbar">
          <Modal show={this.state.login} modalClosed={this.handleCancelLogin}>
            <Login requestToken={this.props.requestToken.request_token} />
          </Modal>
          <Logo />
          <Search />
          <Link to="/profile/user">User Profile</Link>
          <LoginButton click={this.handleLogin} />
          <ScrollUp />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    api: state.api.api,
    requestToken: state.requestToken
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getApi: bindActionCreators(getApi, dispatch),
    getRequestToken: bindActionCreators(getRequestToken, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
