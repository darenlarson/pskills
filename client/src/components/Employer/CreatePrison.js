import React from 'react';

class CreatePrison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      phoneNumber: '',
    };
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  handleSubmit = event => {
    event.preventDefault();

    const token = localStorage.getItem('jwt')

    this.props.createPrison(this.state, token)


  };

  render() {
    return (
      <div>
        <form className="create-prison-form" onSubmit={this.handleSubmit}>
        <input required type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Institution Name" />
        <input required type="text" name="location" onChange={this.handleChange} value={this.state.location} placeholder="5 Digit Zip Code" />
        <input required type="tel" name="phoneNumber" onChange={this.handleChange} value={this.state.phoneNumber} placeholder="Phone Number" />
        <button type="submit">Login</button>
      </form>
      </div>
    )
  };
};

export default CreatePrison;