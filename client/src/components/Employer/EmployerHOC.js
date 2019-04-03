import React from "react";
import CreatePrison from "./CreatePrison";
import EmployerHome from "./EmployerHome";

class EmployerHOC extends React.Component {
  componentDidMount() {
    console.log("componentDidMount() invoked in EmployerHOC.js 1");
    console.log("this.props.name:", this.props.name);

    if (this.props.name === undefined) {
      console.log("componentDidMount() invoked in EmployerHOC.js 2");
      const id = localStorage.getItem("userId");
      this.props.getPrisonInfo(id);
    }
  }

  render() {
    if (this.props.prisonId === null) {
      return <CreatePrison createPrison={this.props.createPrison} />;
    } else {
      return (
        <EmployerHome
          prisonInfo={this.props.prisonInfo}
          prisoners={this.props.prisoners}
          name={this.props.prisonInfo}
          getPrisonInfo={this.props.getPrisonInfo}
          addPrisoner={this.props.addPrisoner}
        />
      );
    }
  }
}

export default EmployerHOC;
