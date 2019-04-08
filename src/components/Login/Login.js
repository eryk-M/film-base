import React, { Component } from "react";
import icons from "../../assets/icons.svg";
import "./Login.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeStatus } from "../../actions/auth/changeStatus.actions";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div
        className="login"
        style={{
          opacity: this.props.show ? "1" : "0",
          transform: this.props.show ? "scale(1)" : "scale(0)"
        }}
      >
        <div className="login__blob">
          <svg className="icon icon-user-circle">
            <use xlinkHref={`${icons}#icon-user-circle`} />
          </svg>
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
        <Link to="/profile/guest">
          <button
            onClick={this.props.guest}
            className="login__btn-guest login__btn"
          >
            Guest
          </button>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    api: state.api.api,
    status: state.status.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeStatus: bindActionCreators(changeStatus, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
