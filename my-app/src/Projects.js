
import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import MainContainer from './MainContainer';



class Projects extends Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            projects: []
          //  Route: false,
            //targetEmployee: -1,
        }
    }

    componentDidMount() {
        fetch(this.dataSource)
        .then(res => res.json())
        .then(data => {
            this.setState({ 
                projects: data 
            });
        }).catch(err => {
            console.log("error");
        });
    }
  render() {
      return(
          
      <MainContainer SideBar="Projects">
             <h1 className="page-header">Projects</h1>
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                         <thead>
                         <tr>
                         <th>Name</th>
                         <th>Description</th>
                         <th>Start Date</th>
                         <th>End Date</th>
                         </tr>
                         </thead>
                          <tbody>
                           {this.state.projects.map((element, index) => {

                             let startDate = moment(element.ProjectStartDate, "LL");
                             let endDate = element.ProjectEndDate;
                             if(endDate == null){
                                 endDate = "n/a";
                             }
                             else {
                                 endDate =  moment(element.ProjectEndDate, "LL");
                             }
                                return (
                                  
                                    <tr>
                                        <td>{element.ProjectName}</td>
                                        <td>{element.ProjectDescription}</td>
                                        <td>{startDate}</td>
                                        <td>{endDate}</td>
                                    </tr>
                                )
                            })}
                          </tbody> 
                        </table>
                    </div>
            
            </MainContainer>
            
       );}}
    export default Projects;