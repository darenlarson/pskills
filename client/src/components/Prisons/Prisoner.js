import React from 'react';
import './Prisoner.css';

class Prisoner extends React.Component {
    state = {
        visibility: 'invisible',
    }

    toggleFullInfo = () => {
        if (this.state.visibility === 'invisible') {
            this.setState({ visibility: 'visible' })
        } else {
            this.setState({ visibility: 'invisible' })
        };
    };

    render() {
        return (
            <div className="prisoner-wrapper" onClick={this.toggleFullInfo}>
                <div className="summary-info">
                    <div className="header">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.availability === 1 ? 'Avaiable' : 'Currently Unavailable'}</p>
                    </div>
                    <p>{this.props.skills}</p>
                </div>

                <div className={`full-info ${this.state.visibility}`}>
                    <img src={this.props.picture} />
                    <p>{this.props.profile}</p>
                </div>
            </div>
        )
    };
};

export default Prisoner;