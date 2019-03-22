import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AgentTransactionSideMenu from "./AgentTransactionSideMenu.jsx";
import AgentTransactionTable from './AgentTransactionTable.jsx'
import fetchAgents from '../../../actions/agentsAction';
import fetchDrivers from '../../../actions/driversAction';
import fetchTransactions from '../../../actions/transactionsAction';

class AgentTransactionPage extends React.Component {
  componentDidMount() {
    this.props.fetchDrivers();
    this.props.fetchTransactions();
  }

  componentWillMount() {
    this.props.fetchAgents();
  }
  render() {
    const singleAgentTransactions = (
      <div>
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1>
                  <span className="fa fa-cog" aria-hidden="true" /> Agent
                  Transactions
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="breadcrumb">
          <div class="container">
            <ol class="breadcrumb">
              <li>
                <Link to="/transactions">Transactions</Link>
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <AgentTransactionSideMenu
                allAgents={this.props.allAgents}
                allDrivers={this.props.allDrivers}
                allTransactions={this.props.allTransactions}
              />
              <AgentTransactionTable />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{singleAgentTransactions}</div>;
  }
}

AgentTransactionPage.propTypes = {
  agentTransact: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => {
  return {
    agentTransact: state.singleAgentAllTransaction,
    allAgents: state.allAgents,
    allDrivers: state.allDrivers,
    allTransactions: state.allTransactions
  };
};

export default connect(mapStateToProps, { fetchAgents, fetchDrivers, fetchTransactions })(AgentTransactionPage);
