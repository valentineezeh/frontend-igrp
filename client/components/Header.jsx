import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserNavigation from "./navigationBar/UserNavigation.jsx";
import GuestNavigation from "./navigationBar/GuestNavigation.jsx";

/**
 * @description class for app header
 *
 * @class Header
 *
 * @extends {Component}
 */
class Header extends Component {
  /**
   * @description Render the JSX template
   *
   * @returns {JSX} render JSX template
   *
   * @memberof Header
   */
  render() {
    const { auth } = this.props;
    return (
      <div>
        {auth.isAuthenticated ? <UserNavigation /> : <GuestNavigation />}
      </div>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.shape({})
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Header);
