import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";
import NavigationBar from "./components/Navigation/NavigationBar";
import Prisons from "./components/Prisons/Prisons";
import PrisonOverview from "./components/Prisons/PrisonOverview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prisons: [],
      prisonInfo: {},
      prisoners: [],
    };
  }

  getPrisons = () => {
    axios
      .get("http://localhost:5000/api/prisons")
      .then(res => {
        console.log(res);
        this.setState({ prisons: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getPrisonInfo = id => {
    console.log('getPrisonInfo() invoked')
    console.log(`id: ${id}`)
    axios
      .get(`http://localhost:5000/api/prisons/${id}`)
      .then(res => {
        console.log(res);

        this.setState({
          prisonInfo: {
            id: res.data.id,
            location: res.data.location,
            name: res.data.name,
            phoneNumber: res.data.phoneNumber,
          },
          prisoners: res.data.prisoners,
        })

        this.props.history.push(`/prisons/${id}`)
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="AppContainer">
        <Route path="/" component={NavigationBar} />

        <Route exact path="/" component={Landing} />

        <Route
          exact
          path="/prisons/"
          render={props => (
            <Prisons
              {...props}
              getPrisons={this.getPrisons}
              getPrisonInfo={this.getPrisonInfo}
              prisons={this.state.prisons}
            />
          )}
        />

        <Route
          path="/prisons/:id"
          render={props => (
            <PrisonOverview
              {...props}
              prisonInfo={this.state.prisonInfo}
              prisoners={this.state.prisoners}
            />
          )}
        />
      </div>
    )
  };
};

export default App;
