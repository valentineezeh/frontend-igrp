import React from "react";
import { Link } from "react-router-dom";
import DriverSideMenu from "./DriverSideMenu.jsx";
import DriverForm from "./DriverForm.jsx";

class Drivers extends React.Component {
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
                  />
                  <small> Drivers</small>
                </h1>
              </div>
            </div>
          </div>
        </header>
        <section id="breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Dashboard</a>
              </li>
              <li className="active">Drivers</li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <DriverSideMenu />
              <DriverForm />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{drivers}</div>;
  }
}

export default Drivers;
