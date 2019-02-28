import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import { ACTIVATE_AGENT_REQUEST } from './types';
import routes from '../constants/routes';

export const agentActivate = (activate) => {
    return {
        type: ACTIVATE_AGENT_REQUEST,
        activate
    };
};

const activateAgent = (phoneNumber) => {
    const actualPhoneNumber = {
        phoneNumber: phoneNumber
    };
    return dispatch => {
        return axios.patch(`${config.apiUrl}${routes.ACTIVATEAGENT}`, actualPhoneNumber).then(
            response => {
                const { message } = response.data;
                dispatch(agentActivate(message));
                toastr.success(message);
            }
        ).catch( error => {
            const { message } = error.response.data;
            toastr.error(message);
            throw(error);
        });
    };
};

export default activateAgent;