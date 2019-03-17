import React from 'react';
import { Route } from "react-router-dom";
import './Prison.css'
import PrisonOverview from './PrisonOverview'

class Prison extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = id => {
        this.props.getPrisonInfo(id);

        this.props.history.push(`/prisons/${id}`);
    }

    render() {
        return (
            <div className="prison-wrapper" onClick={() => this.handleClick(this.props.prison.id)}>
                <h3>Name: {this.props.prison.name}</h3>
                <p>ZIP Code: {this.props.prison.location}</p>
                <p>Phone: {this.props.prison.phoneNumber}</p>
                <p>Available Workers: {this.props.prison.totalPrisoners}</p>
            </div>
        )
    }
};

export default Prison;