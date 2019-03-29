import React from 'react';
import { Link } from 'react-router-dom'
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className="header-wrapper">
            <div className="header-content">
                <div>InMate Skills</div>
                <Link className="login-btn" to="/login">Login</Link>
            </div>
        </div>
    )
}

export default NavigationBar;