import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AgentSideMenu from "./AgentSideMenu.jsx";
import AgentList from "./AgentList.jsx";
import fetchAgents from "../../../actions/agentsAction";
import fetchVehicles from "../../../actions/vehiclesAction";
import fetchTransactions from "../../../actions/transactionsAction";
import getWalletBalanceRequest from '../../../actions/walletActions/getWalletBalance'

class AgentPage extends React.Component {
  componentDidMount() {
    this.props.fetchVehicles();
    this.props.fetchTransactions();
    this.props.getWalletBalanceRequest();
  }

  componentWillMount() {
    this.props.fetchAgents();
  }

  render() {
    const agentDashboard = (
      <div>
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1>
                  <span className="fa fa-cog" aria-hidden="true" /> Agent
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="breadcrumb">
          <div class="container">
            <ol class="breadcrumb">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                {" "}
                <a className="btn btn-danger btn-sm " href="confirm-user">
                  Verify Agent
                </a>
              </li>
              <li>
                {" "}
                <a className="btn btn-danger btn-sm " href="create-agent">
                  Create Agent
                </a>
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <AgentSideMenu
                allAgents={this.props.allAgents}
                allVehicles={this.props.allVehicles}
                allTransactions={this.props.allTransactions}
                walletBalance={this.props.walletBalance}
              />
              <AgentList allAgents={this.props.allAgents} />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{agentDashboard}</div>;
  }
}

AgentPage.propTypes = {
  allAgents: PropTypes.shape({}).isRequired,
  allVehicles: PropTypes.shape({}).isRequired,
  allTransactions: PropTypes.shape({}).isRequired,
  fetchAgents: PropTypes.func.isRequired,
  fetchDrivers: PropTypes.func.isRequired,
  fetchTransactions: PropTypes.func.isRequired,
  getWalletBalanceRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    allAgents: state.allAgents,
    allVehicles: state.allVehicles,
    allTransactions: state.allTransactions,
    walletBalance: state.walletBalance
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAgents: () => dispatch(fetchAgents()),
  fetchVehicles: () => dispatch(fetchVehicles()),
  fetchTransactions: () => dispatch(fetchTransactions()),
  getWalletBalanceRequest: () => dispatch(getWalletBalanceRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgentPage);
