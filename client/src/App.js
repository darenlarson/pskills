import React from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import LandingPage1 from "./components/Landing/LandingPage1";
import NavigationBar from "./components/Navigation/NavigationBar";
import Prisons from "./components/Prisons/Prisons";
import PrisonOverview from "./components/Prisons/PrisonOverview";
import Footer from "./components/Footer/Footer";
import Authentication from "./components/Login/Authentication";
import EmployerHOC from "./components/Employer/EmployerHOC";
import EditPrisoner from "./components/Employer/EditPrisoner";
import EditPrison from "./components/Employer/EditPrison";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prisons: [],
      prisonInfo: {},
      prisonId: null,
      prisoners: [],
      adminId: null,
      prisonerId: null,
      prisonerName: "",
      prisonerAvailability: 0,
      prisonerSkills: "",
      prisonerPicture: "",
      prisonerProfile: ""
    };
  }

  getPrisons = () => {
    axios
      // .get("http://localhost:5000/api/prisons")
      .get("https://prisoner-skills.herokuapp.com/api/prisons")
      .then(res => {
        console.log(res);
        this.setState({ prisons: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getPrisonInfo = id => {
    console.log("getPrisonInfo() invoked");
    console.log(`id: ${id}`);
    axios
      // .get(`http://localhost:5000/api/prisons/${id}`)
      .get(`https://prisoner-skills.herokuapp.com/api/prisons/${id}`)
      .then(res => {
        console.log(res);

        this.setState({
          prisonInfo: {
            id: res.data.id,
            location: res.data.location,
            name: res.data.name,
            phoneNumber: res.data.phoneNumber
          },
          prisoners: res.data.prisoners,
        });

        if (res.data.id) {
          this.setState({
            prisonId: res.data.id
          })
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  getPrisonerInfo = id => {
    console.log("getPrisonerInfo() invoked");
    console.log("id:", id);

    axios
      // .get(`http://localhost:5000/api/prisoners/${id}`)
      .get(`https://prisoner-skills.herokuapp.com/api/prisoners/${id}`)
      .then(res => {
        console.log(res);

        this.setState({
          prisonerId: res.data.id,
          prisonerName: res.data.name,
          prisonerAvailability: res.data.availability,
          prisonerSkills: res.data.skills,
          prisonerPicture: res.data.picture,
          prisonerProfile: res.data.profile
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addPrisoner = prisonerInfo => {
    console.log("addPrisoner() invoked");
    console.log(prisonerInfo);

    prisonerInfo.prisonId = this.state.prisonInfo.id;
    console.log(prisonerInfo);
    
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    axios
      // .post(`http://localhost:5000/api/prisoners`, prisonerInfo, requestOptions)
      .post(`https://prisoner-skills.herokuapp.com/api/prisoners`, prisonerInfo, requestOptions)
      .then(res => {
        console.log(res);
        this.getPrisonInfo(this.state.prisonInfo.id);
      })
      .catch(err => {
        console.log(err);
      });
  };

  editPrisonerInfo = (id, changes) => {
    console.log("editPrisonerInfo() invoked");

    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    axios
      // .put(`http://localhost:5000/api/prisoners/${id}`, changes, requestOptions)
      .put(`https://prisoner-skills.herokuapp.com/api/prisoners/${id}`, changes, requestOptions)
      .then(res => {
        console.log(res);
        this.getPrisonInfo(this.state.prisonInfo.id);
      })
      .catch(err => {
        console.log(err);
      });
  };

  deletePrisoner = id => {
    console.log("deletePrisoner() invoked");

    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    axios
      // .delete(`http://localhost:5000/api/prisoners/${id}`, requestOptions)
      .delete(`https://prisoner-skills.herokuapp.com/api/prisoners/${id}`, requestOptions)
      .then(res => {
        console.log(res);
        this.getPrisonInfo(this.state.prisonInfo.id);
      })
      .catch(err => {
        console.log(err);
      });
  };

  registerUser = credentials => {
    // const endpoint = "http://localhost:5000/api/users/register";
    const endpoint = "https://prisoner-skills.herokuapp.com/api/users/register";

    axios
      .post(endpoint, credentials)
      .then(res => {
        this.loginUser(credentials);
      })
      .catch(err => console.log(err));
  };

  loginUser = credentials => {
    // const loginEndpoint = "http://localhost:5000/api/users/login";
    const loginEndpoint = "https://prisoner-skills.herokuapp.com/api/users/login";

    axios
      .post(loginEndpoint, credentials)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("userId", res.data.id);
        this.props.history.push("/employer");
        this.setState({ adminId: res.data.id });

        axios
          // .get(`http://localhost:5000/api/prisons/${res.data.id}`)
          .get(`https://prisoner-skills.herokuapp.com/api/prisons/${res.data.id}`)
          .then(res => {
            this.setState({
              prisonInfo: {
                id: res.data.id,
                location: res.data.location,
                name: res.data.name,
                phoneNumber: res.data.phoneNumber
              },
              prisoners: res.data.prisoners
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => console.log(err));
  };

  createPrison = prisonInfo => {
    console.log("createPrison() invoked");
    console.log(prisonInfo);

    prisonInfo.id = this.state.adminId

    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    axios
      // .post(`http://localhost:5000/api/prisons/`, prisonInfo, requestOptions)
      .post(`https://prisoner-skills.herokuapp.com/api/prisons/`, prisonInfo, requestOptions)
      .then(res => {
        console.log(res);
        this.setState({
          prisonId: res.data[0]
        })
        this.getPrisonInfo(res.data[0])
      })
      .catch(err => {
        console.log(err);
      });
  };

  editPrison = changes => {
    console.log("editPrison() invoked");
    console.log(changes)

    const id = this.state.prisonId
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    axios
      // .put(`http://localhost:5000/api/prisons/${id}`, changes, requestOptions)
      .put(`https://prisoner-skills.herokuapp.com/api/prisons/${id}`, changes, requestOptions)
      .then(res => {
        console.log(res);
        this.getPrisonInfo(id)
      })
      .catch(err => {
        console.log(err);
      });
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
              addPrisoner={this.addPrisoner}
              createPrison={this.createPrison}
            />
          )}
        />

        <Route
          exact
          path="/employer/edit"
          render={props => (
            <EditPrison
              {...props}
              prisonInfo={this.state.prisonInfo}
              editPrison={this.editPrison}
            />
          )}
        />

        <Route
          path="/employer/prisoner/edit/:id"
          render={props => (
            <EditPrisoner
              {...props}
              getPrisonerInfo={this.getPrisonerInfo}
              editPrisonerInfo={this.editPrisonerInfo}
              deletePrisoner={this.deletePrisoner}
              // getPrisonInfo={this.getPrisonInfo}
              // prisonId={this.state.prisonId}
              prisonerId={this.state.prisonerId}
              prisonerName={this.state.prisonerName}
              prisonerAvailability={this.state.prisonerAvailability}
              prisonerSkills={this.state.prisonerSkills}
              prisonerPicture={this.state.prisonerPicture}
              prisonerProfile={this.state.prisonerProfile}
              prisoners={this.state.prisoners}
            />
          )}
        />

        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default withRouter(App);
