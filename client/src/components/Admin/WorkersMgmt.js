import React from "react";
import {
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import Workers from "./Workers";

class WorkersMgmt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newworker: {
        name: "",
        picture: "mock",
        prisonId: this.props.prisonIdSTORE,
        availability: false,
        skills: ""
      },
      dropdownOpen: false
    };
  }

  componentDidMount() {
    (localStorage.getItem("user") === "\"\"" || !localStorage.getItem("user"))  && localStorage.setItem("user", JSON.stringify(this.props.userobjectSTORE));
  }

  toggleDropDown = () =>
    this.setState(currentState => ({
      dropdownOpen: !currentState.dropdownOpen
    }));

  toggleWlOn = () => {
    this.setState({
      newworker: {
        ...this.state.newworker,
        availability: true
      }
    });
  };

  toggleWlOff = () => {
    this.setState({
      newworker: {
        ...this.state.newworker,
        availability: false
      }
    });
  };

  handleChanges = event => {
    this.setState({
      newworker: {
        ...this.state.newworker,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = (e, newworker) => {
    e.preventDefault();
    this.props.addWorker(this.state.newworker, this.props.jwtSTORE);
    this.setState({
      newworker: {
        name: "",
        picture: "",
        prisonId: this.props.prisonIdSTORE,
        availability: false,
        skills: ""
      }
    });
  };

  handleDelete = (id, authToken) => {
    this.props.deleteWorker(id, authToken);
  };

  handleUpdate = (workerdata, id, authToken) => {
    this.props.updateWorker(workerdata, id, authToken);
  };

  render() {
    return (
      <div className="WorkersMgmtWrapper">
        <form
          className="WorkerFormWrapper"
          onSubmit={e => this.handleSubmit(e, this.state.newworker)}
        >
          <Button size="lg" onClick={this.props.handleLogOut}>
            Log Out
          </Button>
          <InputGroup size="lg">
            <InputGroupAddon addonType="prepend">
              <InputGroupText className="Purple">Worker Name:</InputGroupText>
            </InputGroupAddon>
            <Input
              value={this.state.newworker.name}
              type="text"
              name="name"
              onChange={this.handleChanges}
            />
            <InputGroupButtonDropdown
              addonType="append"
              isOpen={this.state.dropdownOpen}
              toggle={this.toggleDropDown}
            >
              <DropdownToggle className="Purple" caret>
                {this.state.newworker.availability
                  ? `AVAILABLE FOR WORK LEAVE`
                  : `NOT AVAILABLE FOR WORK LEAVE`}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={this.toggleWlOn}>
                  Available for Work Leave
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.toggleWlOff}>
                  Not Available for Work Leave
                </DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </InputGroup>
          <InputGroup size="lg">
            <InputGroupAddon addonType="prepend">
              <InputGroupText className="Purple">
                New Worker Skills (Seperate /w Commas):
              </InputGroupText>
            </InputGroupAddon>
            <Input
              value={this.state.newworker.skills}
              type="text"
              name="skills"
              onChange={this.handleChanges}
            />
          </InputGroup>
          <Button className="Purple" type="submit">
            Add Worker
          </Button>
        </form>
        <Workers
          jwtSTORE={this.props.jwtSTORE}
          updateWorker={this.handleUpdate}
          deleteWorker={this.handleDelete}
          linkedworkersStore={this.props.linkedworkersStore}
          error={this.props.errorStore}
        />
      </div>
    );
  }
}

export default WorkersMgmt;
