import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import './css/LoginView.css'

class LoginView extends React.Component {


  render() {
    return (
      <div className="login-container">
        <div className="login-wrapper">
          <nav className="tabs-container">
            <NavLink className="nav-link" exact to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/login/register">Register</NavLink>
          </nav>

          <div className="form-container">
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  {...props}
                  loginUser={this.props.loginUser}
                />
              )}
            />

            <Route
              path="/login/register"
              render={props => (
                <Register
                  {...props}
                  loginUser={this.props.loginUser}
                  registerUser={this.props.registerUser}
                />
              )}
            />

          </div>
        </div>
      </div>
    )
  };
};

export default LoginView;