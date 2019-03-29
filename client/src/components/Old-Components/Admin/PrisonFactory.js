import React from "react";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import Loader from "react-loader-spinner";

class PrisonFactory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.prisonIdSTORE,
      name: "",
      location: "",
      phoneNumber: ""
    };
  }

  handleSubmit = (e, prisondata, authToken) => {
    e.preventDefault();
    this.props.addPrison(prisondata, authToken);
  };

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="PrisonFactoryWrapper">
        {this.props.gpLoading ? (
          <Loader type="TailSpin" color="#2a4a45" height="30%" width="20%" />
        ) : (
          <form
            onSubmit={e =>
              this.handleSubmit(e, this.state, this.props.jwtSTORE)
            }
          >
            <h2>Add New Prison to Complete Registration</h2>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Prison Name:</InputGroupText>
              </InputGroupAddon>
              <Input
                value={this.state.name}
                name="name"
                onChange={this.handleChanges}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Prison Location:</InputGroupText>
              </InputGroupAddon>
              <Input
                value={this.state.location}
                name="location"
                onChange={this.handleChanges}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Phone No:</InputGroupText>
              </InputGroupAddon>
              <Input
                value={this.state.phoneNumber}
                name="phoneNumber"
                onChange={this.handleChanges}
              />
            </InputGroup>
            <br />
            <Button size="lg" type="submit">
              Add New Prison
            </Button>
          </form>
        )}
      </div>
    );
  }
}

export default PrisonFactory;
