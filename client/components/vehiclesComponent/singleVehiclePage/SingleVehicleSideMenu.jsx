import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SingleVehicleSideMenu extends React.Component {
  render() {
    const { agents } = this.props.allAgents;
    const vehicleLength = this.props.allVehicles.length;
    const transactionLength = this.props.allTransactions.length;
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

            <Link to="/agents" className="list-group-item">
              <i className="fas fa-users" /> Agents{" "}
              <span className="badge">{agents.length}</span>
            </Link>

            <a href="/vehicles" className="list-group-item">
              <i className="fas fa-truck" /> Vehicles{" "}
              <span className="badge">{vehicleLength}</span>
            </a>

            <Link to="transactions" className="list-group-item">
              <i class="far fa-newspaper" /> Transactions
              <span className="badge">{transactionLength}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allAgents: state.allAgents,
    allVehicles: state.allVehicles,
    allTransactions: state.allTransactions
  };
};

export default connect(mapStateToProps)(SingleVehicleSideMenu);