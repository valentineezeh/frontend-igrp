import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TransactionSideMenu from "./TransactionSideMenu.jsx";
import TransactionList from "./TransactionList.jsx";
import fetchAgents, { fetchAgentsMessage } from "../../actions/agentsAction";
import fetchDrivers from "../../actions/driversAction";
import fetchTransactions from "../../actions/transactionsAction";

class Transactions extends React.Component {
  componentDidMount() {
    this.props.fetchAgentsMessage();
    this.props.fetchAgents();
    this.props.fetchDrivers();
    this.props.fetchTransactions();
  }

  render() {
    const transaction = (
      <div>
        <header id="header">
          <div class="container">
            <div class="row">
              <div class="col-md-10">
                <h1>
                  <span class="glyphicon glyphicon-cog" aria-hidden="true" />{" "}
                  <small>Transactions</small>
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
              <li class="active">Transactions</li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <TransactionSideMenu
                allAgents={this.props.allAgents}
                allDrivers={this.props.allDrivers}
                allTransactions={this.props.allTransactions}
              />
              <TransactionList
                allAgents={this.props.allAgents}
                allDrivers={this.props.allDrivers}
                allTransactions={this.props.allTransactions}
              />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{transaction}</div>;
  }
}

Transactions.propTypes = {
  allAgents: PropTypes.shape({}).isRequired,
  allDrivers: PropTypes.array.isRequired,
  allTransactions: PropTypes.array.isRequired,
  fetchAgents: PropTypes.func.isRequired,
  fetchDrivers: PropTypes.func.isRequired,
  fetchAgentsMessage: PropTypes.func.isRequired,
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
  { fetchAgents, fetchDrivers, fetchTransactions, fetchAgentsMessage }
)(Transactions);
