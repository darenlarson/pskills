import React from "react";
import LoginView from "./LoginView";
import EmployerHOC from "../Employer/EmployerHOC";

class Authentication extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("jwt")) {
      this.props.history.push("/employer");
    }
  }

  render() {
    return (
      <LoginView
        loginUser={this.props.loginUser}
        registerUser={this.props.registerUser}
      />
    );
  }
}

export default Authentication;
