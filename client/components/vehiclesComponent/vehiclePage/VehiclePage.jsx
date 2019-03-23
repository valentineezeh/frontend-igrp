import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import VehicleSideMenu from "./VehicleSideMenu.jsx";
import VehicleList from "./VehicleList.jsx";
import fetchAgents from "../../../actions/agentsAction";
import fetchVehicles from "../../../actions/vehiclesAction";
import fetchTransactions from "../../../actions/transactionsAction";

class VehiclePage extends React.Component {
  componentDidMount() {
    this.props.fetchAgents();
    this.props.fetchVehicles();
    this.props.fetchTransactions();
  }
  render() {
    const driverDashboard = (
      <div>
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1>
                  <span
                    className="glyphicon glyphicon-cog"
                    aria-hidden="true"
                  /> {'  '}
                  Manage Vehicle
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="breadcrumb">
          <div class="container">
            <ol class="breadcrumb">
              <li>
                View all vehicles
              </li>
              <li>
                {" "}
                <Link className="btn btn-danger btn-sm " to="create-driver">
                  Create Vehicle
                </Link>
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <VehicleSideMenu
                allAgents={this.props.allAgents}
                allVehicles={this.props.allVehicles}
                allTransactions={this.props.allTransactions}
              />
              <VehicleList
                allAgents={this.props.allAgents}
                allVehicles={this.props.allVehicles}
                allTransactions={this.props.allTransactions}
              />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{driverDashboard}</div>;
  }
}

VehiclePage.propTypes = {
  allAgents: PropTypes.array.isRequired,
  allVehicles: PropTypes.array.isRequired,
  allTransactions: PropTypes.array.isRequired,
  fetchAgents: PropTypes.func.isRequired,
  fetchDrivers: PropTypes.func.isRequired,
  fetchTransactions: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    allAgents: state.allAgents,
    allVehicles: state.allVehicles,
    allTransactions: state.allTransactions
  };
};

export default connect(
  mapStateToProps,
  { fetchAgents, fetchVehicles, fetchTransactions }
)(VehiclePage);
