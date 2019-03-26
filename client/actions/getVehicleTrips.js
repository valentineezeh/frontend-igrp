import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import { GET_VEHICLE_TRIPS } from './types';
import routes from '../constants/routes';

const getAllTrips = (vehicleTrips) => {
    return {
        type: GET_VEHICLE_TRIPS,
        vehicleTrips
    };
};

const fetchVehicleTrips = (vrtID) => {
    return dispatch => {
        return axios.get(`${config.apiUrl}${routes.GETVEHICLETRIPS}/${vrtID}`).then(
            response => {
                dispatch(getAllTrips(response.data.data));
            }
        ).catch(
            error => {
                const { message } = error.response.data;
                toastr.error(message);
            }
        );
    };
};

export default fetchVehicleTrips;