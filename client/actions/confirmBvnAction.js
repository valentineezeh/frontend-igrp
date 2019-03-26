import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import routes from '../constants/routes';
import { POST_CONFIRM_BVN, SET_CONFIRM_BVN_ERROR, DELETE_CONFIRM_BVN_ERROR } from './types';

const confirmBvn = ConfirmBvn => ({
    type: POST_CONFIRM_BVN,
    ConfirmBvn
});

const setConfirmBvnError = error => ({
    type: SET_CONFIRM_BVN_ERROR,
    error
});

export const deleteConfirmBvnError = () => ({
    type: DELETE_CONFIRM_BVN_ERROR
})

const confirmBvnRequest = bvn => dispatch => {
    return axios.post(`${config.apiUrl}${routes.CONFIRMBVN}/${bvn}`).then( response => {
        const { message } = response.data;
        const { makeBvnRequest } = response.data;
        dispatch(confirmBvn(makeBvnRequest));
        toastr.success(message);
    }).catch( error => {
        const { message } = error.response.data;
        dispatch(setConfirmBvnError(message));
    });
};

export default confirmBvnRequest;