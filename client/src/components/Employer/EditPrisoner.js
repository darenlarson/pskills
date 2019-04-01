import React from "react";
import "./css/EditPrisoner.css";

class EditPrisoner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prisonerName: '',
      prisonerAvailability: null,
      prisonerPicture: '',
      prisonerProfile: '',
      prisonerSkills: '',
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    
    this.props.getPrisonerInfo(id);

    this.setState({
      prisonerName: this.props.prisonerName,
      prisonerAvailability: this.props.prisonerAvailability,
      prisonerPicture: this.props.prisonerPicture,
      prisonerProfile: this.props.prisonerProfile,
      prisonerSkills: this.props.prisonerSkills,
    })
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  handleSubmit = (event, id) => {
    event.preventDefault();

    this.props.editPrisoner();
  }

  render() {
    return (
      <div className="edit-wrapper">
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <input className="header" type="text" name="prisonerName" onChange={this.handleChange} value={this.state.prisonerName} placeholder={this.props.prisonerName} />
          <input type="text" name="prisonerAvailability" onChange={this.handleChange} value={this.state.prisonerAvailability} placeholder={this.props.prisonerAvailability} />
          <input type="text" name="prisonerSkills" onChange={this.handleChange} value={this.state.prisonerSkills} placeholder={this.props.prisonerSkills} />
          <textarea rows="10" name="prisonerProfile" onChange={this.handleChange} value={this.state.prisonerProfile} placeholder={this.props.prisonerProfile} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EditPrisoner;
