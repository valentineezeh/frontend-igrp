import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AgentSideMenu from "./AgentSideMenu.jsx";
import AgentList from "./AgentList.jsx";
import fetchAgents, { fetchAgentsMessage } from "../../../actions/agentsAction";
import fetchDrivers from "../../../actions/driversAction";
import fetchTransactions from "../../../actions/transactionsAction";

class AgentPage extends React.Component {
  componentDidMount() {
    this.props.fetchAgentsMessage();
    this.props.fetchAgents();
    this.props.fetchDrivers();
    this.props.fetchTransactions();
  }

  render() {
    const agentDashboard = (
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
          <div class="container">
            <ol class="breadcrumb">
              <li>
                <a href="index.html">Dashboard</a>
              </li>
              <li>
                {" "}
                <Link className="btn btn-danger btn-sm " to="create-agent">
                  Create Agent
                </Link>
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <AgentSideMenu
                allAgents={this.props.allAgents}
                allDrivers={this.props.allDrivers}
                allTransactions={this.props.allTransactions}
              />
              <AgentList
                allAgents={this.props.allAgents}
                allDrivers={this.props.allDrivers}
                allTransactions={this.props.allTransactions}
              />
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
)(AgentPage);
