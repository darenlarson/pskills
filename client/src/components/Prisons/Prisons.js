import React from 'react';
import axios from 'axios';
import Prison from './Prison';

class Prisons extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPrisons();
    };

    render() {
        return (
            <div>
                {this.props.prisons.map(prison => (
                    <Prison
                        key={prison.id}
                        prison={prison}
                        history={this.props.history}
                        getPrisonInfo={this.props.getPrisonInfo}
                    />
                ))}
            </div>
        );
    };
};

export default Prisons;