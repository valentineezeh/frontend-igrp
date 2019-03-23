import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchAgents from '../../../actions/agentsAction';
import fetchDrivers from '../../../actions/vehiclesAction';
import fetchTransactions from '../../../actions/transactionsAction';
import EditAgentSideMenu from '../editAgentComponent/EditAgentSideMenu.jsx';
import EditAgentForm from './EditAgentForm.jsx';

class EditAgentPage extends Component {

componentDidMount() {
    this.props.fetchAgents()
    this.props.fetchDrivers();
    this.props.fetchTransactions();
    }
    render() {
        const editAgentPage = (
    <div>
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1>
                  <span className="fa fa-cog" aria-hidden="true" /> Edit Agent
                </h1>
              </div>
            </div>
          </div>
        </header>
        <section id="breadcrumb">
          <div class="container">
            <ol class="breadcrumb">
              <li>
                <Link to="#">Edit Agent</Link>
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <EditAgentSideMenu
                allAgents={this.props.allAgents}
                allDrivers={this.props.allDrivers}
                allTransactions={this.props.allTransactions}
              />
              <EditAgentForm />
            </div>
          </div>
        </section>
    </div>
        );
        return <div>{editAgentPage}</div>
    }
}

EditAgentPage.propTypes = {
    allAgents: PropTypes.shape({}).isRequired,
    allDrivers: PropTypes.shape({}).isRequired,
    allTransactions: PropTypes.shape({}).isRequired,
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

const mapDispatchToProps = dispatch => ({
    fetchAgents: () => dispatch(fetchAgents()),
    fetchDrivers: () => dispatch(fetchDrivers()),
    fetchTransactions: () => dispatch(fetchTransactions())
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditAgentPage);
