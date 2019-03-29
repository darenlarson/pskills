import React from "react";
import EmployerHome from "../components/Employer/EmployerHome";
import { connect } from "react-redux";
import { getPrisons, getPrisonsWorkers } from "../store/actions";
import { Route } from "react-router-dom";

class EmployerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewingprison: false,
      currentlyviewing: ""
    };
  }

  clearViewing = () => {
    this.setState({
      viewingprison: false,
      currentlyviewing: ""
    })
  }

  toggleViewing = id => {
    this.setState(currentState => ({
      viewingprison: !currentState.viewingprison,
      currentlyviewing: id
    }));
  };

  componentDidMount() {
    this.props.getPrisons();
  }
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => (
            <EmployerHome
              clearViewing={this.clearViewing}
              currentlyviewing={this.state.currentlyviewing}
              currentprisonSTORE={this.props.currentprisonSTORE}
              getPrisonsWorkers={this.props.getPrisonsWorkers}
              viewingprison={this.state.viewingprison}
              toggleViewing={this.toggleViewing}
              prisonsarraySTORE={this.props.prisonsarraySTORE}
              gpLoading={this.props.gpLoading}
              gwLoading={this.props.gwLoading}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prisonsarraySTORE: state.prisonsarray,
  currentprisonSTORE: state.currentprison,
  gpLoading: state.gpLoading,
  gwLoading: state.gwLoading
});

const connectEmployerview = connect(
  mapStateToProps,
  { getPrisons, getPrisonsWorkers }
)(EmployerView);

export default connectEmployerview;
