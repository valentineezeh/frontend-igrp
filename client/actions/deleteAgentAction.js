import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import { DELETE_AGENT_REQUEST } from './types';
import routes from '../constants/routes';

export const deleteAgent = DeleteAgent => ({
    type: DELETE_AGENT_REQUEST,
    DeleteAgent
});

const deleteAgentRequest = phoneNumber => dispatch => {
    axios.delete(`${config.apiUrl}${routes.DELETEAGENT}/${phoneNumber}`).then(response => {
        const { message } = response.data;
        dispatch(deleteAgent(response.data.data));
        toastr.success(message);
    }).catch( error => {
        const { message } = error.response.data;
        toastr.error(message);
    });
};

export default deleteAgentRequest;
