import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "../../../middleware/moment";
import activateAgent from "../../../actions/activateAgentAction";
import deactivateAgent from "../../../actions/deactivateAgentAction";
import agentTransactions from "../../../actions/agentTransactionsAction";
import IsLoading from '../../commons/IsLoading.jsx';
import deleteAgentRequest from '../../../actions/deleteAgentAction';

class SingleAgentOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading1: false,
      isLoading2: false,
      isLoading3: false,
      isLoading4: false
    }
    this.onActivate = this.onActivate.bind(this);
    this.onDeactivate = this.onDeactivate.bind(this);
    this.onAgentTransaction = this.onAgentTransaction.bind(this);
    this.onDeleteAgent = this.onDeleteAgent.bind(this);
  }

  onActivate(event) {
    event.preventDefault();
    this.setState({ isLoading1: true })
    return this.props.activateAgent(this.props.singleAgent.phoneNumber);
  }

  onDeactivate(event) {
    event.preventDefault();
    this.setState({ isLoading2: true })
    return this.props.deactivateAgent(this.props.singleAgent.phoneNumber);
  }

  onAgentTransaction(event) {
    event.preventDefault();
    return this.props.agentTransactions(this.props.singleAgent.phoneNumber);
  }

  onDeleteAgent(event) {
    event.preventDefault();
    this.setState({ isLoading3: true })
    return this.props.deleteAgentRequest(this.props.singleAgent.phoneNumber);
  }


  render() {
    const agentStatus = this.props.singleAgent.deactivate;
    const convertedStatus = "" + agentStatus;
    const {
      isLoading1,
      isLoading2,
      isLoading3,
      isLoading4
    } = this.state
    const { activateStatus, deactivateStatus, deleteSuccess, success } = this.props;

    if (activateStatus) {
      window.location.href = "/agents";
    }
    if (isLoading1) {
      return (
        <div >
          <IsLoading />
        </div>
      )
    }

    if (deactivateStatus) {
      window.location.href = "/agents"
    }
    if (isLoading2) {
      return (
        <div>
          <IsLoading />
        </div>
      )
    }

    if (deleteSuccess) {
      window.location.href = "/agents"
    }
    if (isLoading3) {
      return (
        <div>
          <IsLoading />
        </div>
      )
    }

    if (success) {
      window.location.href = '/agent-transactions'
    }

    if (isLoading4) {
      return (
        <div>
          <IsLoading />
        </div>
      )
    }

    return (
      <div className="col-md-9" id="singleagentoverview">
        <div className="panel-heading" />
        <div className="panel panel-default">
          <div className="panel-heading main-color-bg">
            <div className="row">
              <div className="col-md-4">
                <Link 
                  id="anchor" 
                  className="btn btn-white" 
                  to="#" 
                  role="button"
                  onClick={this.onDeleteAgent}
                  >
                  <i className="fas fa-times">{' '}Delete Agent</i>
                </Link>
              </div>

              <div className="col-md-4">
                <a
                  id="anchor"
                  className="btn btn-white"
                  href="#"
                  role="button"
                  onClick={this.onAgentTransaction}
                >
                  <i className="fa fa-calendar" /> Agent Transactions
                </a>
              </div>

              <div className="col-md-4">
                <Link
                  id="anchor"
                  className="btn  btn-white"
                  role="button"
                  to="/edit-agent"
                  
                >
                  <i className="fa fa-edit">Edit agent</i>
                </Link>
              </div>
            </div>
          </div>
          <div className="panel-body">
            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Fullname</label>
                <br />
                <p>{this.props.singleAgent.fullname}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputEmail4">Phone Number</label>
                <p>{this.props.singleAgent.phoneNumber}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">BVN</label>
                <p>{this.props.singleAgent.bvn}</p>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Address</label>
                <br />
                <p>{this.props.singleAgent.address}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputEmail4">Email</label>
                <p>{this.props.singleAgent.email}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputEmail4">Age</label>
                <p>{this.props.singleAgent.age}</p>
              </div> 
            </div>
            <div className="form-row">
            <div className="form-group col-md-4">
                <label for="inputPassword4">Mean Of Identification</label>
                <p>{this.props.singleAgent.meansOfId}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">ID Number</label>
                <p>{this.props.singleAgent.idNumber}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">Guarantor Fullname</label>
                <p>{this.props.singleAgent.guarantorsFullName}</p>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputEmail4">Guarantor Phone Number</label>
                <p>{this.props.singleAgent.guarantorsPhonenumber}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">Guarantor Address</label>
                <p>{this.props.singleAgent.guarantorsAddress}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputEmail4">Deactivate</label>
                <p>{convertedStatus}</p>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputPassword4">Role</label>
                <p>{this.props.singleAgent.role}</p>
              </div>
              <div className="form-group col-md-4">
                <label for="inputPassword4">Date Joined</label>
                <p>{moment(this.props.singleAgent.date).format("MM-DD-YY")}</p>
              </div>
            </div>
          </div>
          <div className="panel-heading main-color-bg-foot ">
            <div id="activate">
              <button
                className="btn btn-danger btn-text"
                type="submit"
                onClick={this.onActivate}
              >
                <i className="fa fa-check">Activate</i>
              </button>
            </div>
            <div id="deactivate">
              <button
                className="btn btn-danger btn-text"
                type="submit"
                onClick={this.onDeactivate}
              >
                <i className="fa fa-times"> De-activate</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SingleAgentOverview.propTypes = {
  activateStatus: PropTypes.bool.isRequired,
  deactivateAgent: PropTypes.bool.isRequired,
  singleAgent: PropTypes.shape({}).isRequired,
  deactivateAgent: PropTypes.func.isRequired,
  activateAgent: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    activateStatus: state.agentActivateRequest.status,
    deactivateStatus: state.agentDeactivateRequest.status,
    agentTransactions: state.singleAgentAllTransaction,
    success: state.singleAgentAllTransaction.success,
    deleteSuccess: state.deleteAgent.deleteSuccess
  };
};

const mapDispatchToProps = dispatch => ({
  activateAgent: (phoneNumber) => dispatch(activateAgent(phoneNumber)),
  deactivateAgent: (phoneNumber) => dispatch(deactivateAgent(phoneNumber)),
  agentTransactions: (phoneNumber) => dispatch(agentTransactions(phoneNumber)),
  deleteAgentRequest: (phoneNumber) => dispatch(deleteAgentRequest(phoneNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleAgentOverview);
