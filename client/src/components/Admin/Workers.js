import React from "react";
import Worker from "./Worker";

class Workers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <div className="WorkersTableHeader" />
        {this.props.linkedworkersStore.map(worker => (
          <Worker
            jwtSTORE={this.props.jwtSTORE}
            updateWorker={this.props.updateWorker}
            deleteWorker={this.props.deleteWorker}
            worker={worker}
            key={worker.id}
          />
        ))}
      </div>
    );
  }
}

export default Workers;
