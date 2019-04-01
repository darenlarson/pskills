import React from 'react';
import { Link } from 'react-router-dom'
import './css/Prisoner.css';

class Prisoner extends React.Component {
    state = {
    }

    render() {
        return (
            <Link to={`/employer/prisoner/edit/${this.props.id}`} className="prisoner-wrapper">
                <div className="summary-info">
                    <div className="header">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.availability === 1 ? 'Avaiable' : 'Currently Unavailable'}</p>
                    </div>
                    <p>{this.props.skills}</p>
                </div>
            </Link>
        )
    };
};

export default Prisoner;