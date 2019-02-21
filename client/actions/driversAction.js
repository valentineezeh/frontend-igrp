import axios from 'axios';
import config from '../config/index';
import { ALL_DRIVERS_REQUEST } from './types';
import routes from '../constants/routes';

export const allDrivers = (drivers) => {
    return {
        type: ALL_DRIVERS_REQUEST,
        drivers
    };
};

const fetchDrivers = () => {
    return dispatch => {
        return axios.get(`${config.apiUrl}${routes.DRIVERS}`).then(response => {
            dispatch(allDrivers(response.data.data));
        }).catch(error => {
            throw(error);
        });
    };
};

export default fetchDrivers;
