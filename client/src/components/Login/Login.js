import React from 'react';
import axios from 'axios';
import './css/Login-Register.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  handleSubmit = event => {
    event.preventDefault();
    
    const credentials = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.loginUser(credentials);
  }


  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <input required type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="Username" />
        <input required type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    )
  };
};

export default Login;