import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './MainContainer'

class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            employees: [],
            // redirect: false,
            // targetEmployee: -1,
        }
    }
    componentDidMount() {
        fetch(this.dataSource)
        .then(res => res.json())
        .then(data => {
            this.setState({ 
                employees: data 
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
                <table  className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name & Position</th>
                            <th>Address</th>
                            <th>Phone Num</th>
                            <th>Hire Date</th>
                            <th>Salary Bonus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((element, index) => {
                            return (
                                // https://momentjs.com/docs/
                                <tr>
                                    <td>{element.FirstName} {element.LastName} - {element.Position.PositionName}</td>
                                    <td>{element.AddressStreet} {element.AddressCity} {element.AddressState} {element.AddressZip}</td>
                                    <td>{element.PhoneNum} ext {element.Extension}</td>
                                    <td>{moment(element.HireDate).format('LL')}</td>
                                    <td>$ {element.SalaryBonus}</td>
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
export default Employees;