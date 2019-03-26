import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SideMenu from "./SideMenu.jsx";
import DashboardOverview from "./Overview.jsx";
import fetchAgents from "../../actions/agentsAction";
import fetchVehicles from "../../actions/vehiclesAction";
import fetchTransactions from "../../actions/transactionsAction";
import getWalletBalanceRequest from '../../actions/walletActions/getWalletBalance';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchVehicles();
    this.props.fetchAgents();
    this.props.fetchTransactions();
    this.props.getWalletBalanceRequest();
  }

  render() {
    const dashboard = (
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
                  Dashboard <small>Manage Your Site</small>
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li className="active">Dashboard</li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <SideMenu
                allAgents={this.props.allAgents}
                allDrivers={this.props.allVehicles}
                allTransactions={this.props.allTransactions}
                walletBalance={this.props.walletBalance}
              />
              <DashboardOverview
                allAgents={this.props.allAgents}
                walletBalance={this.props.walletBalance}
              />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{dashboard}</div>;
  }
}

Dashboard.propTypes = {
  allAgents: PropTypes.array.isRequired,
  allVehicles: PropTypes.array.isRequired,
  allTransactions: PropTypes.array.isRequired,
  fetchAgents: PropTypes.func.isRequired,
  fetchVehicles: PropTypes.func.isRequired,
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
)(Dashboard);
