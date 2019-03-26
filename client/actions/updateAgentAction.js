import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import routes from '../constants/routes';
import { UPDATE_AGENT, SET_UPDATE_AGENT_ERROR,DELETE_UPDATE_AGENT_ERROR_MESSAGE } from './types';

const UpdateAgent = agentUpdate => ({
    type: UPDATE_AGENT,
    agentUpdate
});

const setUpdateAgentError = error => ({
    type: SET_UPDATE_AGENT_ERROR,
    error
});

export const deleteUpdateAgentErrorMessages = () => ({
    type: DELETE_UPDATE_AGENT_ERROR_MESSAGE
});

const updateAgentRequest = AgentDetails => dispatch => axios.put(`${config.apiUrl}${routes.UPDATEAGENT}/${AgentDetails.id}`, AgentDetails).then((response) => {
    const { message } = response.data;
    const { data } = response.data;
    dispatch(UpdateAgent(data));
    toastr.success(message);
}).catch((error) => {
    const { message } = error.response.data;
    dispatch(setUpdateAgentError(message));
});
  
export default updateAgentRequest;