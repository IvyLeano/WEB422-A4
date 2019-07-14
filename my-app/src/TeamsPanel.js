import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class TeamsPanel extends Component {
   
  constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            teams: []
          //  Route: false,
            //targetEmployee: -1,
        }
    }
    componentDidMount() {
        fetch(this.dataSource)
        .then(res => res.json())
        .then(data => {
            this.setState({ 
                teams: data 
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
                             {this.state.teams.map((element, index) => {
                                return (
                                    <tr>
                                        <td>{element.TeamName}</td>
                                        <td>{element.Employees.length} Employees</td>
                                    </tr>
                                )
                            })}
                          </tbody>
                        </table>
                      </div>
                      <Link to="/teams"><button id="button" className="btn btn-primary form-control">View All Team Data</button></Link>
                    </div>
                  </div>
    );}}
    export default TeamsPanel;