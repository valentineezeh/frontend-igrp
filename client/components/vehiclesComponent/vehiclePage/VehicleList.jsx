import React from "react";
import VehicleRow from "./VehicleRows.jsx";

class VehicleList extends React.Component {
  render() {
    return (
      <div class="col-md-9">
        <div class="panel panel-default">
          <div class="panel-heading main-color-bg">
            <h3 class="panel-title">All Vehicles</h3>
          </div>
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">Phone</th>
                    <th scope="col">Vehicle Type</th>
                    <th scope="col">Vehicle Number</th>
                    <th scope="col">Role</th>
                    <th scope="col">Status</th>
                    <th scope="col">Joined</th>
                    <th scope="col">View</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.allVehicles.map(vehicles => (
                    <VehicleRow key={vehicles.id} vehicles={vehicles} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VehicleList;
