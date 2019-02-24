import React from "react";
import DriverRow from "./DriverRows.jsx";

class DriverList extends React.Component {
  render() {
    return (
      <div class="col-md-9">
        <div class="panel panel-default">
          <div class="panel-heading main-color-bg">
            <h3 class="panel-title">All Drivers</h3>
          </div>
          <div className="panel-body">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Vehicle Type</th>
                  <th scope="col">Vehicle Number</th>
                  <th scope="col">Role</th>
                  <th scope="col">Status</th>
                  <th scope="col">Joined</th>
                </tr>
              </thead>
              <tbody>
                {this.props.allDrivers.map(drivers => (
                  <DriverRow key={drivers.id} drivers={drivers} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default DriverList;
