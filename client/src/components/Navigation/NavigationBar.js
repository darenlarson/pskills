import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

class NavigationBar extends React.Component {

	logout = () => {
		console.log('logout() invoked')
		localStorage.removeItem('jwt');
		localStorage.removeItem('userId');
		this.props.history.push('/')
	}
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-content">
          <Link className="login-btn" to="/">InMate Skills</Link>
          {localStorage.getItem("jwt") === null ? (
            <Link className="login-btn" to="/login">
              Login
            </Link>
          ) : (
						<div className="btn-wrapper">
							<Link className="login-btn" to="/employer">Manage</Link>
							<div className="login-btn" onClick={this.logout}>
								Logout
							</div>
						</div>
          )}
        </div>
      </div>
    );
  }
}

export default NavigationBar;
