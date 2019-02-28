import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SingleAgentSideMenu from "./SingleAgentPageSideMenu.jsx";
import SingleAgentOverview from "./SingleAgentOverview.jsx";

class SingleAgentPage extends React.Component {
  render() {
    const singleAgentContainer = (
      <div>
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  <span className="fa fa-cog" aria-hidden="true" />
                  Dashboard <small>Manage Agents</small>
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="breadcrumb">
          <div class="container">
            <ol class="breadcrumb">
              <li>
                <Link to="/dashboard">Agent Dashboard</Link>
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <SingleAgentSideMenu
                allAgents={this.props.allAgents}
                allDrivers={this.props.allDrivers}
                allTransactions={this.props.allTransactions}
              />
              <SingleAgentOverview singleAgent={this.props.singleAgent} />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{singleAgentContainer}</div>;
  }
}

SingleAgentPage.propTypes = {
  singleAgent: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => {
  return {
    singleAgent: state.singleAgentRequests.singleAgent,
    status: state.singleAgentRequests.status
  };
};

export default connect(mapStateToProps)(SingleAgentPage);
