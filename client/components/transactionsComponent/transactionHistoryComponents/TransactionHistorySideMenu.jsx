import React from "react";
import { Link } from "react-router-dom";

class TransactionHistorySideMenu extends React.Component {
  render() {
    const { agents } = this.props.allAgents;
    const vehicleLength = this.props.allVehicles.length;
    const transactionLength = this.props.allTransactions.length;
    const { totalAmount } = this.props.walletBalance;
    return (
      <div>
        <div class="col-md-3">
          <div className="list-group">
            <Link
              to="/dashboard"
              className="list-group-item active main-color-bg"
            >
              <span className="glyphicon glyphicon-cog" aria-hidden="true" />{" "}
              Dashboard
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

export default TransactionHistorySideMenu;
