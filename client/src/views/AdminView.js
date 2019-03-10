import React from "react";
import {} from "reactstrap";
import WorkersMgmt from "../components/Admin/WorkersMgmt";
import PrisonFactory from "../components/Admin/PrisonFactory";
import {
  getLinkedWorkers,
  addWorker,
  updateWorker,
  deleteWorker,
  addPrison,
  getPrisons,
} from "../store/actions";
import { connect } from "react-redux";

class AdminView extends React.Component {

  componentDidMount() {
    this.props.getLinkedWorkers(this.props.prisonIdSTORE);
  }

  render() {
    return (
      <div>
        {this.props.prisonsarrayStore
          .map(prison => {
            return prison.id;
          })
          .includes(this.props.prisonIdSTORE) ? (
          <WorkersMgmt
            handleLogOut={this.props.handleLogOut}
            getLinkedWorkers={this.props.getLinkedWorkers}
            addWorker={this.props.addWorker}
            updateWorker={this.props.updateWorker}
            deleteWorker={this.props.deleteWorker}
            linkedworkersStore={this.props.linkedworkersStore}
            error={this.props.errorStore}
            userobjectSTORE={this.props.userobjectSTORE}
            prisonIdSTORE={this.props.prisonIdSTORE}
            jwtSTORE={this.props.jwtSTORE}
          />
        ) : (
          <PrisonFactory
            prisonsarrayStore={this.props.prisonsarrayStore}
            addPrison={this.props.addPrison}
            jwtSTORE={this.props.jwtSTORE}
            prisonIdSTORE={this.props.prisonIdSTORE}
            gpLoading={this.props.gpLoading}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prisonsarrayStore: state.prisonsarray,
  linkedworkersStore: state.linkedworkers,
  errorStore: state.error,
  userobjectSTORE: state.userobject,
  prisonIdSTORE: state.prisonId,
  jwtSTORE: state.jwt,
  gpLoading: state.gpLoading
});

export default connect(
  mapStateToProps,
  { getLinkedWorkers, addWorker, updateWorker, deleteWorker, addPrison, getPrisons }
)(AdminView);
