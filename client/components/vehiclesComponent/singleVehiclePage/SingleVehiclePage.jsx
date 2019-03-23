import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SingleVehicleSideMenu from "./SingleVehicleSideMenu.jsx";
import SingleVehicleOverview from "./SingleVehicleOverview.jsx";

class SingleVehiclePage extends React.Component {
  render() {
    const singleAgentContainer = (
      <div>
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  <span className="fa fa-cog" aria-hidden="true" />
                  Dashboard <small>Manage Vehicles</small>
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="breadcrumb">
          <div class="container">
            <ol class="breadcrumb">
              <li>
                <Link to="#">Single Vehicle Dashboard</Link>
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <SingleVehicleSideMenu
                // allAgents={this.props.allAgents}
                // allDrivers={this.props.allDrivers}
                // allTransactions={this.props.allTransactions}
              />
              <SingleVehicleOverview />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{singleAgentContainer}</div>;
  }
}

SingleVehiclePage .propTypes = {
  // singleAgent: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps)(SingleVehiclePage );
