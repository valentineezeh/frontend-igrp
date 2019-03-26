import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import routes from '../constants/routes';
import { POST_CONFIRM_NIN, SET_CONFIRM_NIN_ERROR, DELETE_CONFIRM_NIN_ERROR } from './types';

const confirmNin = ConfirmNin => ({
    type: POST_CONFIRM_NIN,
    ConfirmNin
});

const setConfirmNinError = error => ({
    type: SET_CONFIRM_NIN_ERROR,
    error
});

export const deleteConfirmNinError = () => ({
    type: DELETE_CONFIRM_NIN_ERROR
})

const confirmNinRequest = nin => dispatch => {
    return axios.post(`${config.apiUrl}${routes.CONFIRMNIN}/${nin}`).then( response => {
        const { message } = response.data;
        const { nin } = response.data;
        dispatch(confirmNin(nin));
        toastr.success(message);
    }).catch( error => {
        const { message } = error.response.data;
        dispatch(setConfirmNinError(message));
    });
};

export default confirmNinRequest;