import React from 'react';
import './Landing.css'

const Landing = props => {
    return (
        <div className="landing-container">
            <div onClick={() => props.history.push('/prisons')}>Are you looking for workers?</div>
            <div onClick={() => props.history.push('/register')}>Are you looking to find your prisoners opportunities?</div>
        </div>
    )
}

export default Landing;