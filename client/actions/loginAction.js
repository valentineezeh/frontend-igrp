import axios from 'axios';
import jwt from 'jsonwebtoken';
import Cookie from 'cookies-js';
import toastr from 'toastr';
import config from '../config/index.js';
import { SET_CURRENT_USER, SET_CURRENT_USER_FAIL, DELETE_ERROR_MESSAGE} from '../actions/types';
import routes from '../constants/routes.js';

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    user
});
  
export const setCurrentUserError = error => ({
    type: SET_CURRENT_USER_FAIL,
    error
});
  
export const deleteErrorMessages = () => ({
    type: DELETE_ERROR_MESSAGE
});

const userLoginRequest = userDetails => (dispatch) => {
    const user = userDetails;
    return axios.post(`${config.apiUrl}${routes.SIGN_IN}`, user).then( response => {
        const message = response.data.message;
        const { token } = response.data.data;
        Cookie.set('jwtToken', token);
        toastr.success(message);
        dispatch(setCurrentUser(jwt.decode(token)));
    }).catch( error => {
        const { message } = error.response.data;
        toastr.error(message);
        dispatch(setCurrentUserError(message));
    });
};

export default userLoginRequest;