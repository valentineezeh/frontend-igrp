import React from "react";
import { Link } from "react-router-dom";

class TransactionSideMenu extends React.Component {
  render() {
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
              <span className="badge">12</span>
            </Link>

            <Link to="/driver" className="list-group-item">
              <i className="fas fa-truck" /> Drivers{" "}
              <span className="badge">33</span>
            </Link>

            <Link to="transaction.html" className="list-group-item">
              <i class="far fa-newspaper" /> Transactions
              <span className="badge">203</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionSideMenu;
