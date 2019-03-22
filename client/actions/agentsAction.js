import axios from 'axios';
import config from '../config/index';
import { ALL_AGENTS_REQUEST, AGENT_SUCCESS_MESSAGE } from './types';
import routes from '../constants/routes.js';

export const allAgents = (agents) => {
    return {
        type: ALL_AGENTS_REQUEST,
        agents
    };
};

export const agentSuccessMessage = (SuccessMessage) => {
    return {
        type: AGENT_SUCCESS_MESSAGE,
        SuccessMessage
    };
};



const fetchAgents = () => {
    return dispatch => {
        return axios.get(`${config.apiUrl}${routes.AGENTS}`).then( response => {
            dispatch(allAgents(response.data.data));
        }).catch(error => {
            throw(error);
        });
    };
};

export const fetchAgentsMessage = () => {
    return dispatch => {
        return axios.get(`${config.apiUrl}${routes.AGENTS}`).then(
            response => {
                const { message } = response.data;
                dispatch(agentSuccessMessage(message));
            }
        ).catch( error => {
            throw(error);
        });
    };
};

export default fetchAgents;

