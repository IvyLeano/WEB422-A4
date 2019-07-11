import React, { Component } from 'react';
import { BrowserRouter, Switch, Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (     
      <BrowserRouter>
      <Switch>
            <div className="col-sm-3 col-md-2  sidebar">
              <ul className="nav nav-sidebar">
                <li className={(this.props.highlight === "Overview" ? 'active' : '')}>
                <a href="/">Overview <span className="sr-only">(current)</span></a></li>
              </ul>
              <ul className="nav nav-sidebar">
                <li className={(this.props.highlight === "Projects" ? 'active' : '')}><Link to="/projects">Projects</Link></li>
                <li className={(this.props.highlight === "Teams" ? 'active' : '')}><Link to="/teams">Teams</Link></li>
                <li className={(this.props.highlight === "Employees" ? 'active' : '')}><Link to="/employees">Employees</Link></li>
              </ul>
            </div>
            </Switch>
             </BrowserRouter>
            );
            }
            }
               export default SideBar;