import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import routes from '../constants/routes';
import { UPDATE_VEHICLE, SET_UPDATE_VEHICLE_ERROR,DELETE_UPDATE_VEHICLE_ERROR_MESSAGE } from './types';

const UpdateVehicle = vehicleUpdate => ({
    type: UPDATE_VEHICLE,
    vehicleUpdate
});

const setUpdateVehicleError = error => ({
    type: SET_UPDATE_VEHICLE_ERROR,
    error
});

export const deleteUpdateVehicleErrorMessages = () => ({
    type: DELETE_UPDATE_VEHICLE_ERROR_MESSAGE
});

const updateVehicleRequest = VehicleDetails => dispatch => {
    axios.put(`${config.apiUrl}${routes.UPDATEVEHICLE}/${VehicleDetails.id}`, VehicleDetails).then((response) => {
        const { message } = response.data;
        const { data } = response.data;
        dispatch(UpdateVehicle(data));
        toastr.success(message);
    }).catch((error) => {
        const { message } = error.response.data;
        dispatch(setUpdateVehicleError(message));
    });
}
  
export default updateVehicleRequest;