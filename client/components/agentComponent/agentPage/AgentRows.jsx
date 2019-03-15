import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import moment from "../../../middleware/moment";
import fetchSingleAgent, {
  fetchSingleAgentMessage
} from "../../../actions/getSingleAgentAction";

class AgentsRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: this.props.agents.phoneNumber,
      isLoading: false
    };
    this.onGetSingleAgent = this.onGetSingleAgent.bind(this);
  }

  onGetSingleAgent(event) {
    event.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.fetchSingleAgent(this.state.phoneNumber);
    this.props.fetchSingleAgentMessage(this.state.phoneNumber);
  }

  render() {
    const agentProps = this.props.agents;

    const { status } = this.props;

    if (status) {
      return <Redirect to="/single-agent" />;
    }

    return (
      <tr>
        <td>{agentProps.fullname}</td>
        <td>
          {0}
          {agentProps.phoneNumber}
        </td>
        <td>{agentProps.deactivate.toString()}</td>
        <td>{moment(agentProps.date).format("MM-DD-YY")}</td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            onClick={this.onGetSingleAgent}
          >
            <i className="fa fa-eye" />
          </button>
        </td>
      </tr>
    );
  }
}

AgentsRow.propTypes = {
  singleAgent: PropTypes.shape({}).isRequired,
  fetchSingleAgents: PropTypes.func.isRequired,
  fetchSingleAgentMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    singleAgent: state.singleAgentRequests.singleAgent,
    status: state.singleAgentRequests.status
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleAgent: phoneNumber => dispatch(fetchSingleAgent(phoneNumber)),
  fetchSingleAgentMessage: phoneNumber =>
    dispatch(fetchSingleAgentMessage(phoneNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgentsRow);
