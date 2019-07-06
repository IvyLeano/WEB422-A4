import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'

class App extends Component {

 
  render() {
    return (
 <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Projects</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                            <tr>
                              <td>Project 1</td>
                              <td>Active # Days</td>
                            </tr>
                            <tr>
                              <td>Project 2</td>
                              <td>Active # Days</td>
                            </tr>
                            <tr>
                              <td>Project 3</td>
                              <td>Active # Days</td>
                            </tr>
                            <tr>
                              <td>Project 4</td>
                              <td>Active # Days</td>
                            </tr>
                            <tr>
                              <td>Project 5</td>
                              <td>Active # Days</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a href="/projects" className="btn btn-primary form-control">View All Project Data</a>
                    </div>
                  </div>
    );
  }
}