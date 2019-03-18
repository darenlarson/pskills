import React from "react";
import { Route } from "react-router-dom";
import "./Prison.css";
import PrisonOverview from "./PrisonOverview";

class Prison extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = id => {
    this.props.getPrisonInfo(id);

    this.props.history.push(`/prisons/${id}`);
  };

  render() {
    return (
      <div className="prison-wrapper" onClick={() => this.handleClick(this.props.prison.id)} >
        
        <div className="prison-header" >
            <div className="prison-name" >
                <h3>{this.props.prison.name}</h3>
            </div>
            <div className="prison-contact" >
                <p>{this.props.prison.location}</p>
                <p>{this.props.prison.phoneNumber}</p>
            </div>
        </div>

        <p>Available Workers: {this.props.prison.totalPrisoners}</p>
      </div>
    );
  }
}

export default Prison;
