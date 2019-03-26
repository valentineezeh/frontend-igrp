import axios from 'axios';
import Cookie from 'cookies-js';
import config from '../config/index';
import { ALL_VEHICLES_REQUEST } from './types';
import routes from '../constants/routes';

export const allvehicles = (vehicles) => {
    return {
        type: ALL_VEHICLES_REQUEST,
        vehicles
    };
};

const fetchVehicles = () => {
    return dispatch => {
        const cookie = Cookie.get('jwtToken');
        return axios.get(`${config.apiUrl}${routes.VEHICLES}`, {
            headers: {
                Authorization: cookie
            }
        }).then(response => {
            dispatch(allvehicles(response.data.data));
        }).catch(error => {
            throw(error);
        });
    };
};

export default fetchVehicles;
