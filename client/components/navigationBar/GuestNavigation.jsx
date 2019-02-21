import React from "react";
import { Link } from "react-router-dom";

/**
 * @description class for userNavigation header
 *
 * @class GuestNavigation
 *
 * @extends {Component}
 */
class GuestNavigation extends React.Component {
  /**
   * @description Render the JSX template
   *
   * @returns {JSX} render JSX template
   *
   * @memberof Header
   */
  render() {
    const guestLinks = (
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
              <Link className="navbar-brand" to="/">
                IGR-Transport
              </Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse" />
          </div>
        </nav>
      </div>
    );
    return <div>{guestLinks}</div>;
  }
}

export default GuestNavigation;
