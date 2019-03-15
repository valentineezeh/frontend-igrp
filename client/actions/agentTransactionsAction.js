import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import { AGENT_TRANSACTIONS_REQUEST } from './types';
import routes from '../constants/routes';

export const singleAgentTransactions = (agentTransact) => {
    return {
        type: AGENT_TRANSACTIONS_REQUEST,
        agentTransact
    };
};

const agentTransactions = phoneNumber => {
    return dispatch => {
        return axios.get(`${config.apiUrl}${routes.AGENTTRANSACTIONS}/${phoneNumber}`).then(
            response => {
                const { message } = response.data;
                dispatch(singleAgentTransactions(response.data.data));
                toastr.success(message);
            }
        ).catch( error => {
            const { message } = error.response.data;
            toastr.error(message);
            throw(error);
        });
    };
};

export default agentTransactions;

