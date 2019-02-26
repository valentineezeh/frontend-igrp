import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DriverSideMenu from "./DriverSideMenu.jsx";
import DriverList from "./DriverList.jsx";
import fetchAgents from "../../../actions/agentsAction";
import fetchDrivers from "../../../actions/driversAction";
import fetchTransactions from "../../../actions/transactionsAction";

class DriverPage extends React.Component {
  componentDidMount() {
    this.props.fetchAgents();
    this.props.fetchDrivers();
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
                <Link className="btn btn-danger btn-sm " to="create-driver">
                  Create Driver
                </Link>
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <DriverSideMenu
                allAgents={this.props.allAgents}
                allDrivers={this.props.allDrivers}
                allTransactions={this.props.allTransactions}
              />
              <DriverList
                allAgents={this.props.allAgents}
                allDrivers={this.props.allDrivers}
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

DriverPage.propTypes = {
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
)(DriverPage);
