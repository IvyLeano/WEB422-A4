/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: __Ivy leano-hill_____ Student ID: __120331186____________ Date: __2019-07-14______________
*
********************************************************************************/
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Overview from './Overview'
import Projects from './Projects'
import Employees from './Employees'
import Teams from './Teams'
import NotFound from './NotFound'

class App extends Component {
  render() {
    let herokuapp = "https://fierce-ridge-73424.herokuapp.com/";
    return (
      <BrowserRouter>
      <Switch>
      {/* https://sictweb.github.io/web422/notes/react-routing */}
        <Route exact path='/' render={() => (
          <Overview title="Overview" dataSource={herokuapp} />
        )} />
        <Route exact path='/projects' render={() => (
          <Projects title="Projects" dataSource={herokuapp + "projects"} />
        )} />
        <Route exact path='/teams' render={() => (
          <Teams title="Teams" dataSource={herokuapp + "teams"} />
        )} />
        <Route exact path='/employees' render={() => (
          <Employees title="Employees" dataSource={herokuapp + "employees"} />
        )} />
        <Route render={() => (
          <NotFound title="Not Found" />
        )} />
      </Switch>
      </BrowserRouter>
    );
  }
}
export default App;