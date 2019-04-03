import React from "react";
import Prisoner from "./Prisoner";
import { Link } from 'react-router-dom';
import "./css/EmployerHome.css";

class EmployerHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prisonerName: '',
      prisonerAvailability: 0,
      prisonerProfile: '',
      prisonerSkills: '',
    };
  };

  componentDidMount() {
    console.log("componentDidMount() invoked in EmployerHOC.js 1");
    console.log("this.props.name:", this.props.name);
    if (this.props.name === undefined) {
      console.log("componentDidMount() invoked in EmployerHOC.js 2");
      const id = localStorage.getItem("userId");
      this.props.getPrisonInfo(id);
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleStatusChange = event => {
    this.setState({ [event.target.name]: Number(event.target.value) });
  };

  handleSubmit = event => {
    event.preventDefault();

    const prisonerInfo = {
      name: this.state.prisonerName,
      availability: this.state.prisonerAvailability,
      profile: this.state.prisonerProfile,
      skills: this.state.prisonerSkills
    };

    this.props.addPrisoner(prisonerInfo);

    this.setState({
      prisonerName: '',
      prisonerAvailability: 0,
      prisonerProfile: '',
      prisonerSkills: '',
    })
  };

  render() {
    if (this.props.name === undefined) {
      return <div>An error happened</div>;
    }
    return (
      <div className="employer-container">
        <div className="employer-content">
          <div className="prison-info">
            <h2>{this.props.prisonInfo.name}</h2>
            <p>{this.props.prisonInfo.location}</p>
            <p>{this.props.prisonInfo.phoneNumber}</p>
            <Link className="edit-btn" to="/employer/edit">EDIT</Link>
          </div>

          <div className="add-wrapper">
            <form className="add-form" onSubmit={this.handleSubmit}>
              <div className="header">Add Prisoners</div>
              <input
                className="header"
                type="text"
                name="prisonerName"
                onChange={this.handleChange}
                value={this.state.prisonerName}
                placeholder=" Name"
              />
              <input
                type="text"
                name="prisonerSkills"
                onChange={this.handleChange}
                value={this.state.prisonerSkills}
                placeholder=" Skills"
              />
              <div className="radio-group">
                <div className="radio-set">
                  <input
                    type="radio"
                    id="unavailable"
                    name="prisonerAvailability"
                    onChange={this.handleStatusChange}
                    value={0}
                    checked={
                      this.state.prisonerAvailability === 0 ? true : false
                    }
                  />
                  <label for="unavailable">Unavailable</label>
                </div>
                <div className="radio-set">
                  <input
                    type="radio"
                    id="available"
                    name="prisonerAvailability"
                    onChange={this.handleStatusChange}
                    value={1}
                    checked={
                      this.state.prisonerAvailability === 1 ? true : false
                    }
                  />
                  <label for="available">Available</label>
                </div>
              </div>
              <textarea
                rows="3"
                name="prisonerProfile"
                onChange={this.handleChange}
                value={this.state.prisonerProfile}
                placeholder=" Profile..."
              />
              <div className="button-container">
                <button type="submit">Submit</button>
                <button type="button" onClick={this.handleDelete}>
                  Delete
                </button>
              </div>
            </form>
          </div>

          {this.props.prisoners.map(p => (
            <Prisoner
              key={p.id}
              id={p.id}
              name={p.name}
              skills={p.skills}
              availability={p.availability}
              picture={p.picture}
              profile={p.profile}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default EmployerHome;
