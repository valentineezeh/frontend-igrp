import axios from 'axios';
import toastr from 'toastr';
import Cookie from 'cookies-js';
import config from '../../config/index';
import routes from '../../constants/routes';
import { GET_WALLET_BALANCE } from '../types';

const getWalletBalance = (walletBalance) => {
    return {
        type: GET_WALLET_BALANCE,
        walletBalance
    };
};

const getWalletBalanceRequest = () => {
    return dispatch => {
        const cookie = Cookie.get('jwtToken');
        return axios.get(`${config.apiUrl}${routes.GETWALLETBALANCE}`, {
            headers: {
                Authorization: cookie
            }
        }).then( response => {
            dispatch(getWalletBalance(response.data.data));
        }).catch( error => {
            const { message } = error.response.data;
            toastr.error(message);
        });
    };
};

export default getWalletBalanceRequest;