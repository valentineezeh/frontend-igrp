import axios from 'axios';
import Cookie from 'cookies-js';
import config from '../config/index';
import { ALL_TRANSACTIONS_REQUEST } from './types';
import routes from '../constants/routes';

export const allTransactions = (transactions) => {
    return {
        type: ALL_TRANSACTIONS_REQUEST,
        transactions
    };
};

const fetchTransactions = () => {
    return dispatch => {
        const cookie = Cookie.get('jwtToken');
        return axios.get(`${config.apiUrl}${routes.TRANSACTIONS}`, {
            headers: {
                Authorization: cookie
            }
        }).then(response => {
            dispatch(allTransactions(response.data.data));
        }).catch(error => {
            throw(error);
        });
    };
};

export default fetchTransactions;
