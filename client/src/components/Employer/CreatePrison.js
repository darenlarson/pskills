import React from "react";
import "./css/CreatePrison.css";

class CreatePrison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      phoneNumber: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.createPrison(this.state);
  };

  render() {
    return (
      <div className="add-prison-container">
        <div className="add-prison-wrapper">
          <div className="add-form-container">
            <form className="create-prison-form" onSubmit={this.handleSubmit}>
              <h2>Enter Your Prison Information</h2>
              <input
                className="header"
                required
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                placeholder="Institution Name"
              />
              <input
                required
                type="text"
                name="location"
                onChange={this.handleChange}
                value={this.state.location}
                placeholder="5 Digit Zip Code"
              />
              <input
                required
                type="tel"
                name="phoneNumber"
                onChange={this.handleChange}
                value={this.state.phoneNumber}
                placeholder="Phone Number"
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePrison;
