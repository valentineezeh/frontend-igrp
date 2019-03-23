import React from "react";
import { Link } from "react-router-dom";
import VehicleSideMenu from "./VehicleSideMenu.jsx";
import VehicleForm from "./VehicleForm.jsx";

class Vehicles extends React.Component {
  render() {
    const drivers = (
      <div>
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1>
                  <span
                    className="glyphicon glyphicon-cog"
                    aria-hidden="true"
                  />{'  '}
                  Create Vehicles
                </h1>
              </div>
            </div>
          </div>
        </header>
        <section id="breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li>
                Dashboard
              </li>
              <li className="active">Vehicles</li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <VehicleSideMenu />
              <VehicleForm />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{drivers}</div>;
  }
}

export default Vehicles;
