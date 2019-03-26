import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import routes from '../constants/routes';
import { DELETE_VEHICLE } from './types';

const deleteVehicle = DeleteVehicle => {
    return {
        type: DELETE_VEHICLE,
        DeleteVehicle
    }
};

const deleteVehicleRequest = vehicleId => (dispatch) => {
    return axios.delete(`${config.apiUrl}${routes.DELETEVEHICLE}/${vehicleId}`).then(
        response => {
            const { message } = response.data;
            dispatch(deleteVehicle(message));
            toastr.success(message);
        }
    ).catch( error => {
        const { message } = error.response.data;
        toastr.error(message);
        throw(error);
    });
};

export default deleteVehicleRequest;