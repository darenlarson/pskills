import React from "react";
import { Button } from "reactstrap";
import axios from "axios";

const registerEndpoint =
  "https://prisoner-skills-backend.herokuapp.com/api/users/register";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRegister = e => {
    e.preventDefault();
    axios
      .post(`${registerEndpoint}`, this.state)
      .then(function(response) {
        console.log(response);
      }, this.props.toggleRegister())
      .catch(function(error) {
        alert(error.response.data.error);
      });
  };

  render() {
    return (
      <div>
        <h2>Register User</h2>
        <form onSubmit={this.handleRegister}>
          <input
            name="username"
            placeholder="username"
            onChange={this.handleChanges}
          />
          <input
            name="password"
            placeholder="password"
            onChange={this.handleChanges}
          />
          <Button type="submit">Register User</Button>
        </form>
        <Button type="button" onClick={this.props.toggleRegister}>
          {" "}
          Back to Login{" "}
        </Button>
      </div>
    );
  }
}

export default Register;
