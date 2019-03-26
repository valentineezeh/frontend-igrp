import axios from 'axios';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
    BANK_FUND_TRANSFER,
    SET_BANK_TRANSFER_ERROR_MESSAGE,
    DELETE_BANK_TRANSFER_ERROR_MESSAGE
} from '../types';

const bankFundTransfer = bankTransfer => ({
    type: BANK_FUND_TRANSFER,
    bankTransfer
});

const setBankTransferError = error => ({
    type: SET_BANK_TRANSFER_ERROR_MESSAGE,
    error
});

export const deleteBankTransferError = () => ({
    type: DELETE_BANK_TRANSFER_ERROR_MESSAGE
});

// eslint-disable-next-line max-len
const bankFundTransferRequest = fundTransferDetails => dispatch => axios.post(`${config.apiUrl}${routes.BANKTRANSFER}`, fundTransferDetails).then((response) => {
    const { message } = response.data;
    const { data } = response.data.data;
    dispatch(bankFundTransfer(data));
    toastr.success(message);
}).catch((error) => {
    const { message } = error.response.data;
    dispatch(setBankTransferError(message));
    throw error;
});

export default bankFundTransferRequest;
