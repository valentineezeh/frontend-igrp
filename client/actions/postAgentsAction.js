import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import { 
    POST_AGENT, 
    DELETE_AGENT_ERROR_MESSAGE, 
    SET_CREATE_AGENT_ERROR
} from './types';
import routes from '../constants/routes';

export const postAgent = newAgent => ({
    type: POST_AGENT,
    newAgent
});

const setCreateAgentError = error => ({
    type: SET_CREATE_AGENT_ERROR,
    error
});

export const deleteErrorMessages = () => ({
    type: DELETE_AGENT_ERROR_MESSAGE
});

const agentRequest = agentDetails => (dispatch) => {
    const agent = agentDetails;
    return axios.post(`${config.apiUrl}${routes.CREATEAGENTS}`, agent).then( response => {
        const { message } = response.data;
        const { statusCode } = response.data;
        dispatch(postAgent(statusCode));
        toastr.success(message);
    }).catch( error => {
        const { message } = error.response.data;
        dispatch(setCreateAgentError(message));
    });
};

export default agentRequest;