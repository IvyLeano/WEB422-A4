import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import Projects from './Projects';
import { Link } from 'react-router-dom';

class ProjectsPanel extends Component {
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
    return (
 <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                          {/* https://momentjs.com/docs/ */}
                           {this.state.projects.map((element, index) => {
                             let activeDays = moment().diff(moment(element.ProjectStartDate),'days');
                                return (
                                    <tr>
                                        <td>{element.ProjectName}</td>
                                        <td>Active {activeDays} days</td>
                                    </tr>
                                )
                            })}
                          </tbody> 
                        </table>
                      </div> 
                      <Link to="/projects"><button id="button" className="btn btn-primary form-control">View All Project Data</button></Link>
                    </div>
                  </div>
    );
  }
}
export default ProjectsPanel;