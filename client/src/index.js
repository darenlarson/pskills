import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./store/reducers";
import Authentication from "./components/Login/Authentication";
import EmployerView from "./views/EmployerView";
import HelpView from "./views/HelpView";
import Navigation from "./components/Navigation/Navigation";
import { withRouter } from "react-router-dom"

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="AppContainer">
      <Route path="/(|help)/" component={Navigation} />
        <Route
          exact path="/"
          render={props => (
            <EmployerView prisonsarray={this.state.prisonsarray} {...props} />
          )}
        />
        <Route path="/admin/" render={props => <Authentication {...props} />} />
        <Route path="/help/" render={props => <HelpView {...props} />} />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);
