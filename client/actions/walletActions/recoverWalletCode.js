import axios from 'axios';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import { RECOVER_WALLET_CODE, SET_RECOVER_WALLET_CODE_ERROR, DELETE_RECOVER_WALLET_CODE_MESSAGE } from '../types';

const recoverWalletCode = recoverCode => ({
    type: RECOVER_WALLET_CODE,
    recoverCode
});

const setRecoverWalletCodeError = recoverCodeError => ({
    type: SET_RECOVER_WALLET_CODE_ERROR,
    recoverCodeError
});

export const deleteRecoverWalletCodeError = () => ({
    type: DELETE_RECOVER_WALLET_CODE_MESSAGE
});

const recoverCodeWalletRequest = recoverCodeDetails => dispatch => axios.put(`${config.apiUrl}${routes.WALLETRECOVERYCODE}`, recoverCodeDetails).then((response) => {
    const { message } = response.data;
    const { data } = response.data;
    toastr.success(message);
    dispatch(recoverWalletCode(data));
}).catch((error) => {
    const { message } = error.response.data;
    dispatch(setRecoverWalletCodeError(message));
});

export default recoverCodeWalletRequest;
