import axios from 'axios';
import Cookie from 'cookies-js';
import config from '../config/index';
import routes from '../constants/routes';
import { GET_SINGLE_VEHICLE_REQUEST } from './types';

const singleVehicle = singleVehicleRequests => {
    return {
        type: GET_SINGLE_VEHICLE_REQUEST,
        singleVehicleRequests
    };
};

const fetchSingleVehicle = (vrtID) => {
    return dispatch => {
        return axios.get(`${config.apiUrl}${routes.SINGLEVEHICLE}/${vrtID}`).then(
            response => {
                Cookie.set('vrtID', vrtID);
                dispatch(singleVehicle(response.data.data));
            }
        ). catch( error => {
            throw(error);
        });
    };
};

export default fetchSingleVehicle;
