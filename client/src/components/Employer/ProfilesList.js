import React from "react";
import Loader from "react-loader-spinner";
import {
  Jumbotron,
  Container,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class ProfilesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      viewid: ""
    };
  }

  componentDidMount() {
    this.props.getPrisonsWorkers(this.props.currentlyviewing);
  }

  viewprisoner = id => {
    this.setState({ viewid: id });
  };

  parseName = name => {
    return name[0].toUpperCase();
  };

  parseAvailability = availability => {
    if (availability) {
      return "Yes";
    } else {
      return "No";
    }
  };

  toggleModal = id => {
    if (this.state.modal) {
      this.setState({ modal: false, viewid: "" });
    } else {
      this.setState({ modal: true, viewid: id });
    }
  };

  conditionalRender = () => {
    if (this.props.prison.prisoners) {
      return this.props.prison.prisoners.map(
        ({ id, name, picture, skills, availability }) => (
          <tr>
            <th scope="row">{this.parseName(name)}</th>
            <td>{skills}</td>
            <td>{this.parseAvailability(availability)}</td>
            <td>
              <Button onClick={() => this.toggleModal(id)}>
                Expand Profile
              </Button>
            </td>
          </tr>
        )
      );
    }
  };

  parsebyID = stateid => {
    return this.props.prison.prisoners.find(prisoner => {
      return prisoner.id === stateid;
    });
  };

  conditionalModal = () => {
    if (this.state.modal) {
      return (
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.ProfileModal}
        >
          <ModalHeader toggle={this.toggleModal}>
            Worker First Initial:{" "}
            {this.parseName(this.parsebyID(this.state.viewid).name)}
          </ModalHeader>
          <div className="ModalFlex">
            <ModalBody>
              <img
                className="ModalImage"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Chiesa_di_San_Giorgio_Modena%2C_Santo.jpg"
                alt="Mug shot of Worker"
              />
              <p>Worker Skills</p>
              <ul>
                {this.parsebyID(this.state.viewid)
                  .skills.split(",")
                  .map(skill => {
                    return <li> {skill} </li>;
                  })}
              </ul>
            </ModalBody>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              finibus justo eu nulla pretium interdum. Vestibulum suscipit ipsum
              sem, ac placerat arcu facilisis nec. Maecenas et tellus sit amet
              velit pharetra mollis. Maecenas nunc lectus, viverra pellentesque
              viverra in, tempus ac risus. Vivamus iaculis orci vel consequat
              tempor. Suspendisse consequat convallis sem, ac pharetra eros
              molestie ac. Vivamus quis dui faucibus, porta lectus sit amet,
              iaculis nunc.
            </ModalBody>
          </div>
          <ModalFooter className="ModalFoot">
            Available for Work Leave:{" "}
            {this.parseAvailability(
              this.parsebyID(this.state.viewid).avaiability
            )}
            <Button color="secondary" onClick={this.toggleModal}>
              Go Back
            </Button>
          </ModalFooter>
        </Modal>
      );
    }
  };

  render() {
    return (
      <div className="PrisonDetailsWrapper">
        <Button size="lg" onClick={() => this.props.clearViewing()}>
          {" "}
          Back To Prisons List
        </Button>
        <Jumbotron fluid>
          <Container fluid>
            <h2>{this.props.prison.name}</h2>
            <p>Location: {this.props.prison.location}</p>
            <p>Phone Number: {this.props.prison.phoneNumber}</p>
          </Container>
        </Jumbotron>
        {this.props.gwLoading ? (
            <Loader type="TailSpin" color="#2a4a45" height="30%" width="20%" />
        ) : (
        <Table>
          <thead>
            <tr>
              <th>First Initial</th>
              <th>Skills</th>
              <th>Available for Leave</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>{this.conditionalRender()}</tbody>
        </Table>
        )}
        {this.conditionalModal()}
      </div>
    );
  }
}

export default ProfilesList;
