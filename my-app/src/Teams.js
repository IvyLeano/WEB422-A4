import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from './MainContainer'

class Teams extends React.Component {
     constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            teams: [],
            // redirect: false,
            // targetEmployee: -1,
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
            <div>
            <MainContainer SideBar={this.props.title}>
            <h1 className="page-header">{this.props.title}</h1>             
            <div className="table-responsive overview-table">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>Team Lead</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((element_teams, index) => {
                            // for each team, return the name, projects employees and team lead
                            return (
                                <tr>
                                    <td>{element_teams.TeamName}</td>
                                    <td>
                                    {element_teams.Projects.map((element_projects, index) => {
                                        return (
                                        <li>{element_projects.ProjectName}</li>
                                        )
                                    })}
                                    </td>
                                    <td>{element_teams.Employees.length} Employees</td>
                                    <td>{element_teams.TeamLead.FirstName} {element_teams.TeamLead.LastName}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            </MainContainer>
      </div>            
        );
    }
}

export default Teams;