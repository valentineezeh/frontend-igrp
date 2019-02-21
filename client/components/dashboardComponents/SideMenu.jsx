import React from "react";
import { Link } from "react-router-dom";

class SideMenu extends React.Component {
  render() {
    const agentLength = this.props.allAgents.length;
    const driverLength = this.props.allDrivers.length;
    const transactionLength = this.props.allTransactions.length;
    return (
      <div>
        <div class="col-md-3">
          <div className="list-group">
            <Link to="/" className="list-group-item active main-color-bg">
              <span className="glyphicon glyphicon-cog" aria-hidden="true" />{" "}
              Dashboard
            </Link>

            <Link to="/agent" className="list-group-item" id="agent">
              <i className="fas fa-users" /> Agents{" "}
              <span className="badge">{agentLength}</span>
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

export default SideMenu;
