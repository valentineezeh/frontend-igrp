import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import logoutAction from "../../actions/logoutAction";

/**
 * @description class for userNavigation header
 *
 * @class UserNavigation
 *
 * @extends {Component}
 */
class UserNavigation extends React.Component {
  /**
   * @description handle user log out
   *
   * @param {Object} event logout event object
   *
   * @memberof Header
   *
   * @returns {undefined} calls logoutProps
   */
  onLogout(event) {
    const { logoutUser } = this.props;
    event.preventDefault();
    logoutUser(this.context.router.history.push("/"));
  }

  /**
   * @description Render the JSX template
   *
   * @returns {JSX} render JSX template
   *
   * @memberof Header
   */
  render() {
    const userLinks = (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">
                IGR-Transport
              </a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/dashboard" >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a href="/agents">Agents</a>
                </li>
                <li>
                  <Link to="/vehicles">Vehicles</Link>
                </li>
                <li >
                  <div id="dropdown">
                <a id="dropbtn" style={{textDecoration: "none"}}>Transactions{'  '}
                  <i class="fa fa-caret-down"></i>
               </a>
                <div id="dropdown-content">
                <Link to="/transactions">All Transactions</Link>
                  <Link to="/send-money-wallet">Send Money To Wallet</Link>
                  <Link to="/bank-fund-transfer">Wallet to Bank Transfer</Link>
                  <Link to="/credit-wallet">Credit Wallet from Bank</Link>
                  <Link to="/verify-bank-details">Verify Account Number</Link>
                  <Link to="/transactions-history">Transactions History</Link>
                </div>
                </div>
             </li>
                {/* drop down menu */}
                <li >
                  <div id="dropdown">
                <a id="dropbtn" style={{textDecoration: "none"}}>Wallet{'  '}
                  <i class="fa fa-caret-down"></i>
               </a>
                <div id="dropdown-content">
                  <Link to="/activate-wallet">Activate Wallet</Link>
                  <Link to="/reset-wallet-code">Reset Wallet Code</Link>
                  <Link to="/recover-wallet-code">Recover Wallet Code</Link>
                </div>
                </div>
             </li>
             {/* drop down menu */}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="#">Welcome, Master Agent</Link>
                </li>
                <li>
                  <Link to="#" onClick={this.onLogout.bind(this)}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
    return <div>{userLinks}</div>;
  }
}

UserNavigation.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func
};

UserNavigation.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutAction())
});

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNavigation);
