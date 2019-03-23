import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import {
    CREATE_VEHICLE,
    SET_CREATE_VEHICLE_ERROR,
    DELETE_VEHICLE_ERROR_MESSAGE
} from './types';
import routes from '../constants/routes';

export const postNewVehicle = newVehicle => ({
    type: CREATE_VEHICLE,
    newVehicle 
});

const setCreateVehicleError = error => ({
    type: SET_CREATE_VEHICLE_ERROR,
    error
});

export const deleteVehicleErrorMessages = () => ({
    type: DELETE_VEHICLE_ERROR_MESSAGE
});

const createVehicle = driverDetails => (dispatch) => {
    const driver = driverDetails;
    return axios.post(`${config.apiUrl}${routes.CREATEVEHICLES}`, driver).then(response => {
        const { message } = response.data;
        const {statusCode} = response.data;
        dispatch(postNewVehicle(statusCode));
        toastr.success(message);
    }).catch ( error => {
        const {message} = error.response.data;
        dispatch(setCreateVehicleError(message));
    }); 
};

export default createVehicle;