import axios from 'axios';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
    SEND_MONEY_TO_WALLET,
    SET_SEND_MONEY_ERROR_MESSAGE,
    DELETE_SEND_MONEY_ERROR_MESSAGE
} from '../types';

const sendMoneyToWallet = sendMoney => ({
    type: SEND_MONEY_TO_WALLET,
    sendMoney
});

const setSendMoneyErrorMessage = error => ({
    type: SET_SEND_MONEY_ERROR_MESSAGE,
    error
});

export const deleteSendMoneyErrorMessage = () => ({
    type: DELETE_SEND_MONEY_ERROR_MESSAGE
}); 

const sendMoneyToWalletRequest = transferDetails => dispatch => axios.post(`${config.apiUrl}${routes.SENDMONEYTOWALLET}`, transferDetails).then((response) => {
    const { message } = response.data;
    const { data } = response.data;
    toastr.success(message);
    dispatch(sendMoneyToWallet(data));
}).catch((error) => {
    const { message } = error.response.data;
    dispatch(setSendMoneyErrorMessage(message));
});

export default sendMoneyToWalletRequest;