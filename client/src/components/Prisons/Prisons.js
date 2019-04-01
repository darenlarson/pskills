import React from "react";
import Prison from "./Prison";
import "./Prisons.css";

class Prisons extends React.Component {

  componentDidMount() {
    this.props.getPrisons();
  }

  render() {
    return (
      <div className="prisons-container">

        <div className="prisons-content">
            {this.props.prisons.map(prison => (
            <Prison
                key={prison.id}
                prison={prison}
                history={this.props.history}
                getPrisonInfo={this.props.getPrisonInfo}
            />
            ))}
        </div>
        
      </div>
    );
  }
}

export default Prisons;
