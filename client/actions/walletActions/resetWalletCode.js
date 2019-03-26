import axios from 'axios';
import toastr from 'toastr';
import config from '../../config/index';
import routes from '../../constants/routes';
import {
    RESET_PASSCODE,
    SET_RESET_PASSCODE_MESSAGE,
    DELETE_RESET_PASSCODE_ERROR_MESSAGE
} from '../types';

export const ResetPasscode = resetPasscode => ({
    type: RESET_PASSCODE,
    resetPasscode
});

const setResetPasscodeErrorMessage = error => ({
    type: SET_RESET_PASSCODE_MESSAGE,
    error
});

export const deleteResetPasscodeError = () => ({
    type: DELETE_RESET_PASSCODE_ERROR_MESSAGE
}); 

const resetPasscodeRequest = resetDetails => dispatch => axios.put(`${config.apiUrl}${routes.RESETPASSCODE}`, resetDetails).then((response) => {
    const { message } = response.data;
    const { data } = response.data;
    toastr.success(message);
    dispatch(ResetPasscode(data));
}).catch((error) => {
    const { message } = error.response.data;
    dispatch(setResetPasscodeErrorMessage(message));
});

export default resetPasscodeRequest;
