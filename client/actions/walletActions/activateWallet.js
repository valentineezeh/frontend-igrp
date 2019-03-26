import axios from 'axios';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import { ACTIVATE_WALLET, SET_ACTIVATION_WALLET_ERROR, DELETE_ACTIVATE_WALLET_ERROR_MESSAGE } from '../types';

const ActivateWallet = activateWallet => ({
    type: ACTIVATE_WALLET,
    activateWallet
});

const setActivateWalletError = activateError => ({
    type: SET_ACTIVATION_WALLET_ERROR,
    activateError
});

export const deleteActivateWalletError = () => ({
    type: DELETE_ACTIVATE_WALLET_ERROR_MESSAGE
});

const activateWalletRequest = walletDetails => dispatch => axios.put(`${config.apiUrl}${routes.ACTIVATEWALLET}`, walletDetails).then((response) => {
    const { message } = response.data;
    const { data } = response.data;
    toastr.success(message);
    dispatch(ActivateWallet(data));
}).catch((error) => {
    const { message } = error.response.data;
    dispatch(setActivateWalletError(message));
});

export default activateWalletRequest;
