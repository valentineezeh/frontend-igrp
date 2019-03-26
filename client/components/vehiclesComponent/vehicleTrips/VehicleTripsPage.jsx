import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import VehicleTripsSideMenu from './VehicleTripsSideMenu.jsx'
import fetchAgents from "../../../actions/agentsAction";
import fetchVehicles from "../../../actions/vehiclesAction";
import fetchTransactions from "../../../actions/transactionsAction";
import fetchVehicleTrips from '../../../actions/getVehicleTrips';
import VehicleTripsList from './VehicleTripsList.jsx';
import getWalletBalanceRequest from '../../../actions/walletActions/getWalletBalance';

class VehicleTripsPage extends React.Component {
  componentDidMount() {
    this.props.fetchAgents();
    this.props.fetchVehicles();
    this.props.fetchTransactions();
    this.props.fetchVehicleTrips(this.props.singleVehicle.vrtID);
    this.props.getWalletBalanceRequest();
  }
  render() {
    const { vehicleTrips } = this.props;
    const vehicleTripsDashboard = (
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
                  Vehicle Trips
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="breadcrumb">
          <div class="container">
            <ol class="breadcrumb">
              <li>
                View all vehicles trips
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <VehicleTripsSideMenu 
                allAgents={this.props.allAgents}
                allVehicles={this.props.allVehicles}
                allTransactions={this.props.allTransactions}
                walletBalance={this.props.walletBalance}
              />
              <VehicleTripsList
                vehicleTrips={vehicleTrips}
              />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{vehicleTripsDashboard}</div>;
  }
}

VehicleTripsPage.propTypes = {
  allAgents: PropTypes.array.isRequired,
  allVehicles: PropTypes.array.isRequired,
  allTransactions: PropTypes.array.isRequired,
  fetchAgents: PropTypes.func.isRequired,
  fetchDrivers: PropTypes.func.isRequired,
  fetchTransactions: PropTypes.func.isRequired,
  getWalletBalanceRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    allAgents: state.allAgents,
    allVehicles: state.allVehicles,
    allTransactions: state.allTransactions,
    singleVehicle: state.singleVehicleRequest.singleVehicle,
    vehicleTrips: state.allVehicleTrips.trips,
    walletBalance: state.walletBalance
  };
};

export default connect(
  mapStateToProps,
  {
    fetchAgents, 
    fetchVehicles, 
    fetchTransactions, 
    fetchVehicleTrips,
    getWalletBalanceRequest 
  }
)(VehicleTripsPage);
