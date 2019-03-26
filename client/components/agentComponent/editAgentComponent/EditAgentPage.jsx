import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchAgents from '../../../actions/agentsAction';
import fetchVehicles from '../../../actions/vehiclesAction';
import fetchTransactions from '../../../actions/transactionsAction';
import EditAgentSideMenu from '../editAgentComponent/EditAgentSideMenu.jsx';
import EditAgentForm from './EditAgentForm.jsx';
import getWalletBalanceRequest from '../../../actions/walletActions/getWalletBalance';

class EditAgentPage extends Component {

componentDidMount() {
    this.props.fetchAgents()
    this.props.fetchVehicles();
    this.props.fetchTransactions();
    this.props.getWalletBalanceRequest();
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
                allVehicles={this.props.allVehicles}
                allTransactions={this.props.allTransactions}
                walletBalance={this.props.walletBalance}
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
    allVehicles: PropTypes.shape({}).isRequired,
    allTransactions: PropTypes.shape({}).isRequired,
    fetchAgents: PropTypes.func.isRequired,
    fetchVehicles: PropTypes.func.isRequired,
    fetchTransactions: PropTypes.func.isRequired,
    getWalletBalanceRequest: PropTypes.func.isRequired,
  };

const mapStateToProps = state => {
    return {
      allAgents: state.allAgents,
      allVehicles: state.allVehicles,
      allTransactions: state.allTransactions,
      walletBalance: state.walletBalance
    };
  };

const mapDispatchToProps = dispatch => ({
    fetchAgents: () => dispatch(fetchAgents()),
    fetchVehicles: () => dispatch(fetchVehicles()),
    fetchTransactions: () => dispatch(fetchTransactions()),
    getWalletBalanceRequest: () => dispatch(getWalletBalanceRequest())
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditAgentPage);
