import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import { DEACTIVATE_AGENT_REQUEST } from './types';
import routes from '../constants/routes';

export const agentDeactivate = (deactivate) => {
    return {
        type: DEACTIVATE_AGENT_REQUEST,
        deactivate
    };
};

const deactivateAgent = phoneNumber => (dispatch) => {
    const agentPhoneNumber = {
        phoneNumber: phoneNumber
    };
    return axios.patch(`${config.apiUrl}${routes.DEACTIVATEAGENT}`, agentPhoneNumber).then(
        response => {
            const { message } = response.data;
            dispatch(deactivateAgent(message));
            toastr.success(message);
        }
    ).catch( error => {
        const { message } = error.response.data;
        toastr.error(message);
        throw(error);
    });
};

export default deactivateAgent;