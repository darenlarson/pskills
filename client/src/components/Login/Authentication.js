import React from "react";
import LoginView from "./LoginView";
import EmployerHOC from '../Employer/EmployerHOC';

class Authentication extends React.Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    if (localStorage.getItem("jwt")) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  render() {
    if (this.state.loggedIn || this.props.loggedIn) {
      return <EmployerHOC />
    } else
      return (
        <LoginView
          loginUser={this.props.loginUser}
          registerUser={this.props.registerUser}
        />
      );
  }
}

export default Authentication;
