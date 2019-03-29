import React from 'react';
import CreatePrison from './CreatePrison';
import EmployerHome from './EmployerHome';

class EmployerHOC extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (this.props.prisonId >= 1) {
      return <CreatePrison />
    } else {
      return <EmployerHome />
    }
  }
};

export default EmployerHOC;