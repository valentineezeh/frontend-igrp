import axios from 'axios';
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
        return axios.get(`${config.apiUrl}${routes.DRIVERS}`).then(response => {
            dispatch(allTransactions(response.data.data));
        }).catch(error => {
            throw(error);
        });
    };
};

export default fetchTransactions;
