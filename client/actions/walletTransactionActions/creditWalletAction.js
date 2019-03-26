import axios from 'axios';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
    CREDIT_WALLET,
    SET_CREDIT_WALLET_ERROR_MESSAGE,
    DELETE_CREDIT_WALLET_ERROR_MESSAGE
} from '../types';

const creditWalletViaInnstapay = creditWallet => ({
    type: CREDIT_WALLET,
    creditWallet
});

const setCreditWalletErrorMessage = error => ({
    type: SET_CREDIT_WALLET_ERROR_MESSAGE,
    error
});

export const deleteCreditWalletErrorMessage = () => ({
    type: DELETE_CREDIT_WALLET_ERROR_MESSAGE
});

const creditWallet = creditDetails => dispatch => axios.post(`${config.apiUrl}${routes.CREDITWALLET}`, creditDetails).then((response) => {
    const { message } = response.data;
    const { data } = response.data.data;
    dispatch(creditWalletViaInnstapay(data));
    toastr.success(message);
}).catch((error) => {
    const { message } = error.response.data;
    dispatch(setCreditWalletErrorMessage(message));
    throw error;
});

export default creditWallet;
