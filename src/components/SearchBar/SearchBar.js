import React, { Component } from "react";

import ScrollUp from "../ScrollUp/ScrollUp";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import Modal from "../Modal/Modal";
import "./SearchBar.scss";
import Login from "../Login/Login";
import LoginButton from "../LoginButton/LoginButton";
class NavBar extends Component {
  state = {
    searchValue: "",
    login: true
  };

  handleLogin = () => {
    this.setState({
      login: true
    });

    document.body.style.overflow = "hidden";
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
            <Login />
          </Modal>
          <Logo />
          <Search />
          <LoginButton click={this.handleLogin} />
          <ScrollUp />
        </div>
      </div>
    );
  }
}

export default NavBar;
