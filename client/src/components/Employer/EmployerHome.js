import React from 'react';
import Prisoner from './Prisoner';
import './css/EmployerHome.css';

class EmployerHome extends React.Component {

  componentDidMount() {
    console.log("componentDidMount() invoked in EmployerHOC.js 1")
    console.log("this.props.name:", this.props.name)
    if (this.props.name === undefined) {
      console.log("componentDidMount() invoked in EmployerHOC.js 2")
      const id = localStorage.getItem('userId')
      this.props.getPrisonInfo(id)
    }
  };

  render() {
    if (this.props.name === undefined) {
      return (
        <div>An error happened</div>
      )
    }
    return (
      <div className="overview-container">
        <div className="overview-content">
          <div className="prison-info">
            <h2>{this.props.prisonInfo.name}</h2>
            <p>{this.props.prisonInfo.location}</p>
            <p>{this.props.prisonInfo.phoneNumber}</p>
          </div>

          {this.props.prisoners.map(p => (
            <Prisoner
              key={p.id}
              id={p.id}
              name={p.name}
              skills={p.skills}
              availability={p.availability}
              picture={p.picture}
              profile={p.profile}
            />
          ))}
        </div>
      </div>
    );
  };
};

export default EmployerHome;