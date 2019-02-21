import axios from 'axios';
import config from '../config/index';
import { ALL_AGENTS_REQUEST } from './types';
import routes from '../constants/routes.js';

export const allAgents = (agents) => {
    return {
        type: ALL_AGENTS_REQUEST,
        agents
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

export default fetchAgents;

