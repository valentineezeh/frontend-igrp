import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import { SINGLE_AGENT, SINGLE_AGENT_SUCCESS_MESSAGE } from './types';
import routes from '../constants/routes';

export const singleAgent = (singleAgentRequest) => {
    return {
        type: SINGLE_AGENT,
        singleAgentRequest
    };
};

export const singleAgentSuccessMessage = (agentSuccessMessage) => {
    return {
        type: SINGLE_AGENT_SUCCESS_MESSAGE,
        agentSuccessMessage
    };
};

const fetchSingleAgent = (phoneNumber) => {
    return dispatch => {
        return axios.get(`${config.apiUrl}${routes.SINGLEAGENT}/${phoneNumber}`).then(
            response => {
                dispatch(singleAgent(response.data.data));
            }
        ).catch( error => {
            throw(error);
        });
    };
};

export const fetchSingleAgentMessage = (phoneNumber) => {
    return dispatch => {
        return axios.get(`${config.apiUrl}${routes.SINGLEAGENT}/${phoneNumber}`).then(
            response => {
                const { message } = response.data;
                dispatch(singleAgentSuccessMessage(message));
                toastr.success(message);
            }
        ).catch( error => {
            throw(error);
        });
    };
};

export default fetchSingleAgent;
