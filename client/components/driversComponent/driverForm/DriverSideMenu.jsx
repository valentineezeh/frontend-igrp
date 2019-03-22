import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import fetchAgents from '../../../actions/agentsAction';
import fetchDrivers from '../../../actions/driversAction';
import fetchTransactions from '../../../actions/transactionsAction';

class DriverSideMenu extends React.Component {
  componentDidMount() {
    this.props.fetchDrivers();
    this.props.fetchTransactions();
  }
  componentWillMount() {
    this.props.fetchAgents();
  }
  render() {
    const { agents } = this.props.allAgents;
    const driverLength = this.props.allDrivers.length;
    const transactionLength = this.props.allTransactions.length;
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

            <Link to="/agent" className="list-group-item" id="agent">
              <i className="fas fa-users" /> Agents{" "}
              <span className="badge">{agents.length}</span>
            </Link>

            <Link to="/driver" className="list-group-item">
              <i className="fas fa-truck" /> Drivers{" "}
              <span className="badge">{driverLength}</span>
            </Link>

            <Link to="transaction.html" className="list-group-item">
              <i class="far fa-newspaper" /> Transactions
              <span className="badge">{transactionLength}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

DriverSideMenu.propTypes = {
  allAgents: PropTypes.array.isRequired,
  allDrivers: PropTypes.array.isRequired,
  allTransactions: PropTypes.array.isRequired,
  fetchAgents: PropTypes.func.isRequired,
  fetchDrivers: PropTypes.func.isRequired,
  fetchTransactions: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    allAgents: state.allAgents,
    allDrivers: state.allDrivers,
    allTransactions: state.allTransactions
  };
};

export default connect(
  mapStateToProps,
  { fetchAgents, fetchDrivers, fetchTransactions }
)(DriverSideMenu);
