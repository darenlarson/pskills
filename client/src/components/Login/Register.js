import React from 'react';
import './css/Login-Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
    }
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

    this.props.registerUser(credentials);
  };


  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <input required type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="Username" />
        <input required type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
        <input required type="password" name="passwordConfirm" onChange={this.handleChange} value={this.state.passwordConfirm} placeholder="Confirm Password" />
        <button type="submit">Login</button>
      </form>
    )
  };
};

export default Register;