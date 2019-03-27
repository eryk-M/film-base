import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getApi } from "../../actions/api.actions";
import { postSession } from "../../actions/auth/postSessionId.actions";
import { getAccountDetails } from "../../actions/auth/getAccountDetails.actions";
import "./Profile.scss";
class Profile extends Component {
  state = {
    accountStatus: ""
  };

  componentDidMount() {
    this.props.getApi();
    if (this.props.match.params.status === "user") {
      this.props.postSession(
        this.props.api,
        this.takeRequestToken(this.props.location.search)
      );
    }
  }
  componentDidUpdate() {
    if (!this.props.accountDetails.id && this.props.sessionID.session_id) {
      this.props.getAccountDetails(
        this.props.api,
        this.props.sessionID.session_id
      );
    }
  }

  takeRequestToken = requestToken =>
    requestToken.split("?request_token=")[1].split("&")[0];

  render() {
    console.log(this.state.accountStatus);
    return (
      <div>
        <h1 className="profile__heading">
          Jestes na stronie uzytkownika{this.props.accountDetails.username}
        </h1>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    api: state.api.api,
    accountDetails: state.accountDetails,
    sessionID: state.sessionID
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getApi: bindActionCreators(getApi, dispatch),
    postSession: bindActionCreators(postSession, dispatch),
    getAccountDetails: bindActionCreators(getAccountDetails, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
