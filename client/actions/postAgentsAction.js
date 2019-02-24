import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import { POST_AGENT } from './types';
import routes from '../constants/routes';

export const postAgent = newAgent => ({
    type: POST_AGENT,
    newAgent
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
        toastr.error(message);
    });
};

export default agentRequest;