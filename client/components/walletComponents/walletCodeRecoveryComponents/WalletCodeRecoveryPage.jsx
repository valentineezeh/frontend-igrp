import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import fetchVehicles from '../../../actions/vehiclesAction';
import fetchAgents from '../../../actions/agentsAction';
import fetchTransactions from '../../../actions/transactionsAction';
import WalletCodeRecoverySideMenu from './WalletCodeRecoverySideMenu.jsx';
import WalletCodeRecoveryForm from './WalletCodeRecoveryForm.jsx';
import getWalletBalanceRequest from '../../../actions/walletActions/getWalletBalance';

class WalletCodeRecoveryPage extends React.Component {
  componentDidMount() {
    this.props.fetchVehicles();
    this.props.fetchTransactions();
    this.props.fetchAgents();
    this.props.getWalletBalanceRequest();
  }
  render() {
    const walletCodeRecoveryPage = (
      <div>
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  <span className="fa fa-cog" aria-hidden="true" />
                  Wallet Code Recovery
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="breadcrumb">
          <div class="container">
            <ol class="breadcrumb">
              <li>
                <Link to="#">Recover Wallet Passcode</Link>
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <WalletCodeRecoverySideMenu
                allAgents={this.props.allAgents}
                allVehicles={this.props.allVehicles}
                allTransactions={this.props.allTransactions}
                walletBalance={this.props.walletBalance}
              />
              <WalletCodeRecoveryForm />
            </div>
          </div>
        </section>
      </div>
    );
    return <div>{walletCodeRecoveryPage}</div>;
  }
}

WalletCodeRecoveryPage.propTypes = {
  allAgents: PropTypes.array.isRequired,
  allVehicles: PropTypes.array.isRequired,
  allTransactions: PropTypes.array.isRequired,
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

export default connect(mapStateToProps, {
  fetchAgents, fetchVehicles, fetchTransactions, getWalletBalanceRequest 
})(WalletCodeRecoveryPage);
