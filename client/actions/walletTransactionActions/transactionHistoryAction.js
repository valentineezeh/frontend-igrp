import axios from 'axios';
import toastr from 'toastr';
import config from '../../config/index';
import { GET_TRANSACTION_HISTORY } from '../types';
import routes from '../../constants/routes';

const getAllTransactionHistory = (transactionHistory) => {
    return {
        type: GET_TRANSACTION_HISTORY,
        transactionHistory
    };
};

const fetchTransactionHistory = () => {
    return dispatch => {
        return axios.get(`${config.apiUrl}${routes.TRANSACTIONHISTORY}`).then(
            response => {
                dispatch(getAllTransactionHistory(response.data.data));
            }
        ).catch(
            error => {
                const { message } = error.response.data;
                toastr.error(message);
            }
        );
    };
};

export default fetchTransactionHistory;