import React from "react";
import {} from "reactstrap";
import Register from "./Register";
import {
  dismissLoginError,
  loginUser,
  logoutUser,
  persistLogin,
  getPrisons
} from "../../store/actions/";
import { connect } from "react-redux";
import AdminView from "../../views/AdminView";
import Login from "./Login";
import { Alert } from "reactstrap";

const Authentication = AdminView => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedin: false,
        registering: false,
        login: {
          username: "",
          password: ""
        }
      };
    }

    componentDidMount() {
      this.authCheck();
    }

    authCheck() {
      JSON.parse(localStorage.getItem("user")) &&
        this.props.persistLogin(JSON.parse(localStorage.getItem("user")));
    }

    handleChanges = e => {
      this.setState({
        login: {
          ...this.state.login,
          [e.target.name]: e.target.value
        }
      });
    };

    onDismiss = () => {
      this.setState({ login: "", password: "" });
      this.props.dismissLoginError();
    };

    submitLogin = e => {
      e.preventDefault();
      if (!this.state.login.username || !this.state.login.password) {
        this.setState({
          login: {
            username: "",
            password: ""
          }
        });
        alert("Invalid login, please enter Username and Password");
      } else {
        this.props.loginUser(this.state.login);
      }
    };

    toggleRegister = () => {
      this.setState(currentState => ({
        registering: !currentState.registering
      }));
    };

    handleLogOut = () => {
      localStorage.clear();
      this.props.logoutUser();
    };

    conditionalRender = () => {
      if (this.props.loggedinSTORE) {
        return <AdminView handleLogOut={this.handleLogOut} />;
      } else {
        if (this.state.registering) {
          return <Register toggleRegister={this.toggleRegister} />;
        } else {
          return (
            <Login
              password={this.state.login.password}
              username={this.state.login.username}
              handleChanges={this.handleChanges}
              submitLogin={this.submitLogin}
              toggleRegister={this.toggleRegister}
              getPrisons={this.props.getPrisons}
            />
          );
        }
      }
    };

    render() {
      return this.props.loginerror ? (
        <Alert  className="LoginError" color="dark" isOpen={this.state.visible} toggle={this.onDismiss}>
          {this.props.loginerror}
        </Alert>
      ) : (
        this.conditionalRender()
      );
    }
  };

const mapStateToProps = state => ({
  loggedinSTORE: state.loggedin,
  errorSTORE: state.error,
  loginerror: state.loginerror
});

export default connect(
  mapStateToProps,
  { loginUser, logoutUser, persistLogin, getPrisons, dismissLoginError }
)(Authentication(AdminView)(Login));
