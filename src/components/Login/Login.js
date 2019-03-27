import React, { Component } from "react";

import "./Login.scss";
import LoginLogo from "../../assets/images/login.png";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getApi } from "../../actions/api.actions";
class Login extends Component {
  state = {};

  componentDidMount() {
    // this.props.getApi();
    // this.props.getRequestToken(this.props.api);
  }

  handleLogin = () => {};
  handleGuest = () => {};
  render() {
    console.log(this.props.requestToken);
    return (
      <div className="login">
        <div className="login__blob">
          <img className="login__blob-image" src={LoginLogo} alt="" />
        </div>
        <a
          href={`https://www.themoviedb.org/authenticate/${
            this.props.requestToken
          }?redirect_to=http://localhost:3000/profile/user`}
        >
          <button
            onClick={this.handleLogin}
            className="login__btn-login login__btn"
          >
            Login
          </button>
        </a>
        <button
          onClick={this.handleGuest}
          className="login__btn-guest login__btn"
        >
          Guest
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    api: state.api.api
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getApi: bindActionCreators(getApi, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
