import Cookie from 'cookies-js';
import { LOGOUT_USER } from './types';

export const logoutCurrentUser = () => ({
    type: LOGOUT_USER
});

const logoutAction = () => (dispatch) => {
    Cookie.expire('jwtToken');
    Cookie.expire('phoneNumber');
    Cookie.expire('vrtID');
    dispatch(logoutCurrentUser({}));
};

export default logoutAction;