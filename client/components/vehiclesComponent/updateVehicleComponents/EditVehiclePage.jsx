import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EditVehicleSideMenu from './EditVehicleSideMenu.jsx';
import EditAgentForm from './EditVehicleForm.jsx';
import fetchAgents from '../../../actions/agentsAction';
import fetchVehicles from '../../../actions/vehiclesAction';
import fetchTransactions from '../../../actions/transactionsAction';


class EditVehiclePage extends Component {

componentDidMount() {
    this.props.fetchAgents()
    this.props.fetchVehicles();
    this.props.fetchTransactions();
    }
    render() {
        const editVehiclePage = (
    <div>
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1>
                  <span className="fa fa-cog" aria-hidden="true" /> Edit Vehicle
                </h1>
              </div>
            </div>
          </div>
        </header>
        <section id="breadcrumb">
          <div class="container">
            <ol class="breadcrumb">
              <li>
                <Link to="#">Update Vehicle Details</Link>
              </li>
            </ol>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <EditVehicleSideMenu 
                allAgents={this.props.allAgents}
                allVehicles={this.props.allVehicles}
                allTransactions={this.props.allTransactions}
              />
              <EditAgentForm />
            </div>
          </div>
        </section>
    </div>
        );
        return <div>{editVehiclePage}</div>
    }
}

EditVehiclePage.propTypes = {
    allAgents: PropTypes.shape({}).isRequired,
    allVehicles: PropTypes.shape({}).isRequired,
    allTransactions: PropTypes.shape({}).isRequired,
    fetchAgents: PropTypes.func.isRequired,
    fetchVehicles: PropTypes.func.isRequired,
    fetchTransactions: PropTypes.func.isRequired
  };

const mapStateToProps = state => {
    return {
      allAgents: state.allAgents,
      allVehicles: state.allVehicles,
      allTransactions: state.allTransactions
    };
  };

const mapDispatchToProps = dispatch => ({
    fetchAgents: () => dispatch(fetchAgents()),
    fetchVehicles: () => dispatch(fetchVehicles()),
    fetchTransactions: () => dispatch(fetchTransactions())
  });

export default connect(mapStateToProps, mapDispatchToProps)(EditVehiclePage);
