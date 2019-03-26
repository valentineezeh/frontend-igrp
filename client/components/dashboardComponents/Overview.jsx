import React from "react";
import LatestAgent from "./LatestAgent.jsx";
import walletBalance from '../../reducers/walletReducers/getWalletBalance';

class DashboardOverview extends React.Component {
  render() {
    const { totalAmount } = this.props.walletBalance;
    return (
      <div className="col-md-9">
        <div className="panel panel-default">
          <div className="panel-heading main-color-bg">
            <h3 className="panel-title">IGR-Transport Overview</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-12">
              <div className="well dash-box">
                <h2>
                  <i className="fas fa-wallet" /> {`NGN`} { totalAmount }
                </h2>
                <h4>Wallet</h4>
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
