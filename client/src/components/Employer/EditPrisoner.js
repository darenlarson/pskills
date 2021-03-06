import React from "react";
import "./css/EditPrisoner.css";

class EditPrisoner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prisonerName: '',
      prisonerAvailability: 0,
      prisonerPicture: '',
      prisonerProfile: '',
      prisonerSkills: '',
    };
  };

  componentDidMount() {
    const prisoner = this.props.prisoners.find(p => {
      return p.id === parseInt(this.props.match.params.id);
    })
    console.log(prisoner)
    
    this.setState({
      prisonerName: prisoner.name,
      prisonerAvailability: prisoner.availability,
      prisonerPicture: prisoner.picture,
      prisonerProfile: prisoner.profile,
      prisonerSkills: prisoner.skills,
    }) 
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  handleStatusChange = event => {
    this.setState({ [event.target.name]: Number(event.target.value) })
  };

  handleSubmit = event => {
    event.preventDefault();

    const id = this.props.match.params.id;
    const changes = {
      name: this.state.prisonerName,
      availability: this.state.prisonerAvailability,
      picture: this.state.prisonerPicture,
      profile: this.state.prisonerProfile,
      skills: this.state.prisonerSkills,
    }

    this.props.editPrisonerInfo(id, changes);

    this.props.history.goBack();
  };

  handleDelete = event => {
    event.preventDefault();

    const id = this.props.match.params.id;

    this.props.deletePrisoner(id);

    this.props.history.goBack();
  }

  render() {
    return (
      <div className="edit-wrapper">
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <input className="header" type="text" name="prisonerName" onChange={this.handleChange} value={this.state.prisonerName} placeholder={this.state.prisonerName} />
          <input type="text" name="prisonerSkills" onChange={this.handleChange} value={this.state.prisonerSkills} placeholder={this.state.prisonerSkills} />
          <div className="radio-group">
            <div className="radio-set">
              <input type="radio" id="unavailable" name="prisonerAvailability" onChange={this.handleStatusChange} value={0} checked={this.state.prisonerAvailability === 0 ? true : false} />
              <label for="unavailable">Unavailable</label>
            </div>
            <div className="radio-set">
              <input type="radio" id="available" name="prisonerAvailability" onChange={this.handleStatusChange} value={1} checked={this.state.prisonerAvailability === 1 ? true : false}  />
              <label for="available">Available</label>
            </div>
          </div>
          <textarea rows="10" name="prisonerProfile" onChange={this.handleChange} value={this.state.prisonerProfile} placeholder={this.state.prisonerProfile} />
          <div className="button-container">
            <button type="submit">Submit</button>
            <button type="button" onClick={this.handleDelete}>Delete</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPrisoner;
