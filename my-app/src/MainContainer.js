import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
         <NavBar />
 <div className="container-fluid">
 <div className="row">
 <SideBar highlight={this.props.SideBar}/> // Add the correct "highlight" property here
 <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
 {this.props.children}// be sure to add a reference to the "children" here
 </div>
 </div>
 </div>
</div>
    );
  }
}