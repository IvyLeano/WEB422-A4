import React, { Component } from 'react';
import MainContainer from './MainContainer'
import ProjectsPanel from './ProjectsPanel'
import TeamsPanel from './TeamsPanel'
import EmployeesPanel from './EmployeesPanel'

class Overview extends Component {
  render() {
   let herokuapp = "https://fierce-ridge-73424.herokuapp.com/";
    return (
      <div>
        <MainContainer SideBar={this.props.title}>
        <h1 className="page-header">{this.props.title}</h1> 
        <div className="row"> 
          <div className="col-md-4"> 
            <ProjectsPanel title="Projects" dataSource={herokuapp + "projects"} />
          </div> 
          <div className="col-md-4"> 
            <TeamsPanel title="Teams" dataSource={herokuapp + "teams"} />
          </div> 
          <div className="col-md-4"> 
            <EmployeesPanel title="Employees" dataSource={herokuapp + "employees"} />
          </div> 
        </div> 
        </MainContainer>
      </div>
    );
  }
}
export default Overview;