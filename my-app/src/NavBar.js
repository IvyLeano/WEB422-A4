import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" id="navBar">
            <div className="container-fluid">
                <div className="navbar-header">
                {/* Route doesn't work here, so I used Link to */}
                <Link to="/" className="navbar-brand">{this.props.title}</Link> 
                </div>
            </div>
            </nav>
        );
    }
}

export default NavBar;
