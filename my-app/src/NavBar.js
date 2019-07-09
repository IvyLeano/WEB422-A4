import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <Route to="/" className="navbar-brand">{this.props.title}</Route>  
            </div>
            </div>
        </nav>
        </Switch>
        </BrowserRouter>
        );
        }
        }
        export default NavBar;
