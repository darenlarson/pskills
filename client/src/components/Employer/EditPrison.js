import React from "react";
import "./css/EditPrison.css";

class EditPrison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      phoneNumber: ""
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.prisonInfo.name,
      location: this.props.prisonInfo.location,
      phoneNumber: this.props.prisonInfo.phoneNumber
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.editPrison(this.state);

    this.props.history.push('/employer')
  };

  render() {
    return (
      <div className="add-prison-wrapper">
        <form className="create-prison-form" onSubmit={this.handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EditPrison;
