import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import fetchAgents from '../../../actions/agentsAction';
import fetchVehicles from '../../../actions/vehiclesAction';
import fetchTransactions from '../../../actions/transactionsAction';
import getWalletBalanceRequest from '../../../actions/walletActions/getWalletBalance';

class VehicleSideMenu extends React.Component {
  componentDidMount() {
    this.props.fetchVehicles();
    this.props.fetchTransactions();
    this.props.getWalletBalanceRequest();
  }
  componentWillMount() {
    this.props.fetchAgents();
  }
  render() {
    const { agents } = this.props.allAgents;
    const vehicleLength = this.props.allVehicles.length;
    const transactionLength = this.props.allTransactions.length;
    const { totalAmount } = this.props.walletBalance;

    return (
      <div>
        <div class="col-md-3">
          <div className="list-group">
            <Link to="/" className="list-group-item active main-color-bg">
              <i className="glyphicon glyphicon-cog" aria-hidden="true">
                {" "}
                Dashboard
              </i>
            </Link>

            <Link to="/agents" className="list-group-item" id="agent">
              <i className="fas fa-users" /> Agents{" "}
              <span className="badge">{agents.length}</span>
            </Link>

            <Link to="/vehicles" className="list-group-item">
              <i className="fas fa-truck" /> Vehicles{" "}
              <span className="badge">{vehicleLength}</span>
            </Link>

            <Link to="transactions" className="list-group-item">
              <i class="far fa-newspaper" /> Transactions
              <span className="badge">{transactionLength}</span>
            </Link>

            <Link to="transactions" className="list-group-item">
              <i class="fas fa-wallet" /> Wallet
              <span className="badge">{`NGN `}{totalAmount}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

VehicleSideMenu.propTypes = {
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
    walletBalance: state.walletBalance
  };
};

export default connect(
  mapStateToProps,
  { fetchAgents, fetchVehicles, fetchTransactions, getWalletBalanceRequest }
)(VehicleSideMenu);
