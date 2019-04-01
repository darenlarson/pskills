import React from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import LandingPage1 from './components/Landing/LandingPage1';
import NavigationBar from "./components/Navigation/NavigationBar";
import Prisons from "./components/Prisons/Prisons";
import PrisonOverview from "./components/Prisons/PrisonOverview";
import Footer from "./components/Footer/Footer";
import Authentication from './components/Login/Authentication';
import EmployerHOC from "./components/Employer/EmployerHOC";
import EditPrisoner from "./components/Employer/EditPrisoner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prisons: [],
      prisonInfo: {},
      prisoners: [],
      adminId: null,
      prisonId: null,
      prisonerId: null,
      prisonerName: '',
      prisonerAvailability: null,
      prisonerSkills: '',
      prisonerPicture: '',
      prisonerProfile: '',
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
      })
      .catch(err => {
        console.log(err);
      });
  };

  getPrisonerInfo = id => {
    console.log('getPrisonerInfo() invoked')
    console.log('id:', id)

    axios
      .get(`http://localhost:5000/api/prisoners/${id}`)
      .then(res => {
        console.log(res);

        this.setState({
          prisonerId: res.data.id,
          prisonerName: res.data.name,
          prisonerAvailability: res.data.Availability,
          prisonerSkills: res.data.skills,
          prisonerPicture: res.data.picture,
          prisonerProfile: res.data.profile,
        })
      })
      .catch();
  };

  registerUser = credentials => {
    const endpoint = "http://localhost:5000/api/users/register";

    axios
      .post(endpoint, credentials)
      .then(res => {
        this.loginUser(credentials)
      })
      .catch(err => console.log(err));

  };

  loginUser = credentials => {
    const loginEndpoint = "http://localhost:5000/api/users/login";

    axios
          .post(loginEndpoint, credentials)
          .then(res => {
            localStorage.setItem('jwt', res.data.token);
            localStorage.setItem('userId', res.data.id)
            this.props.history.push('/employer')
            this.setState({ adminId: res.data.id})
            // this.getPrisonInfo(res.data.id)
            axios
              .get(`http://localhost:5000/api/prisons/${res.data.id}`)
              .then(res => {
                this.setState({
                  prisonInfo: {
                    id: res.data.id,
                    location: res.data.location,
                    name: res.data.name,
                    phoneNumber: res.data.phoneNumber,
                  },
                  prisoners: res.data.prisoners,
                })
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(err => console.log(err));
  };

  createPrison = () => {

  };

  render() {
    return (
      <div className="AppContainer">
        <Route path="/" component={NavigationBar} />
        <Route exact path="/" component={LandingPage1} />
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

        <Route
          path="/login"
          render={props => (
            <Authentication
              {...props}
              loginUser={this.loginUser}
              registerUser={this.registerUser}
              prisonId={this.state.prisonId}
              prisonInfo={this.state.prisonInfo}
              prisoners={this.state.prisoners}
              getPrisonInfo={this.getPrisonInfo}
            />
          )}
        />

        <Route
          exact
          path="/employer"
          render={props => (
            <EmployerHOC
              {...props}
              prisonId={this.state.prisonId}
              prisonInfo={this.state.prisonInfo}
              prisoners={this.state.prisoners}
              getPrisonInfo={this.getPrisonInfo}
            />
          )}
        />

        <Route
          path="/employer/prisoner/edit/:id"
          render={props => (
            <EditPrisoner
              {...props}
              getPrisonerInfo={this.getPrisonerInfo}
              prisonerId={this.state.prisonerId}
              prisonerName={this.state.prisonerName}
              prisonerAvailability={this.state.prisonerAvailability}
              prisonerSkills={this.state.prisonerSkills}
              prisonerPicture={this.state.prisonerPicture}
              prisonerProfile={this.state.prisonerProfile}
            />
          )}
        />


        <Route path="/" component={Footer} />
      </div>
    )
  };
};

export default withRouter(App);
