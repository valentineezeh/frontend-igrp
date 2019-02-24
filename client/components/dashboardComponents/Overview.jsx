import React from "react";
import LatestAgent from "./LatestAgent.jsx";

class DashboardOverview extends React.Component {
  render() {
    const { agents } = this.props.allAgents;
    const driverLength = this.props.allDrivers.length;
    const transactionLength = this.props.allTransactions.length;
    return (
      <div className="col-md-9">
        <div className="panel panel-default">
          <div className="panel-heading main-color-bg">
            <h3 className="panel-title">IGR-Transport Overview</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-4">
              <div className="well dash-box">
                <h2>
                  <i className="fas fa-users" /> {agents.length}
                </h2>
                <h4>Agents</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="well dash-box">
                <h2>
                  <i className="far fa-newspaper" /> {transactionLength}
                </h2>
                <h4>Transactions</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="well dash-box">
                <h2>
                  <i className="fas fa-truck" /> {driverLength}
                </h2>
                <h4>Drivers</h4>
              </div>
            </div>
          </div>
        </div>
        <LatestAgent allAgents={this.props.allAgents} />
      </div>
    );
  }
}

export default DashboardOverview;
