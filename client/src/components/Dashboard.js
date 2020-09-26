import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

export class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;

    const dash = (
      <div>
        <h1>{user.name}</h1>
      </div>
    );
    return (
      <div>
        <h1>Dashboard</h1>
        {dash}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
